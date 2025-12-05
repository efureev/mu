import isFunction from '~/is/isFunction'

const DEFAULT_PRIORITY = 0

// Priority queue implemented as an array of buckets (queues) keyed by priority.
// Higher numeric priority is dequeued first.
export class PriorityQueue<T> {
  // Buckets indexed by priority: each bucket is a FIFO queue (array) of items.
  private buckets: T[][] = []
  // Total number of items across all buckets.
  private count = 0
  // Highest priority index that currently has (or last had) items; -1 means empty.
  private maxPriority = -1

  public push(item: T, priority: number = DEFAULT_PRIORITY): void {
    if (priority < 0 || !Number.isFinite(priority)) {
      throw new TypeError(`priority must be a non-negative finite number, got: ${priority}`)
    }

    if (!this.buckets[priority]) {
      this.buckets[priority] = []
    }

    this.buckets[priority].push(item)
    this.count++

    if (priority > this.maxPriority) {
      this.maxPriority = priority
    }
  }

  public pull(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    // Scan down from current highest priority to find the next non-empty bucket.
    for (let p = this.maxPriority; p >= 0; p--) {
      const bucket = this.buckets[p]
      if (bucket && bucket.length > 0) {
        const result = bucket.shift() as T
        this.count--

        // If the bucket becomes empty and this was the highest, adjust maxPriority.
        if (bucket.length === 0 && p === this.maxPriority) {
          this.recalculateMaxPriority()
        }

        return result
      }
    }

    // No items found; normalize internal state.
    this.maxPriority = -1
    return undefined
  }

  public peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined
    }

    for (let p = this.maxPriority; p >= 0; p--) {
      const bucket = this.buckets[p]
      if (bucket && bucket.length > 0) {
        return bucket[0]
      }
    }

    return undefined
  }

  public toArray(): T[] {
    // Flatten from high to low priority while preserving FIFO within each bucket.
    const result: T[] = []
    for (let p = this.maxPriority; p >= 0; p--) {
      const bucket = this.buckets[p]
      if (bucket && bucket.length > 0) {
        // Maintain order within the same priority.
        for (let i = 0; i < bucket.length; i++) {
          result.push(bucket[i])
        }
      }
    }
    return result
  }

  public size(): number {
    return this.count
  }

  public isEmpty(): boolean {
    return this.count === 0
  }

  public reset(): void {
    this.buckets = []
    this.count = 0
    this.maxPriority = -1
  }

  public toString(callback?: (i: T) => any): string {
    const data = this.toArray()

    if (callback && isFunction(callback)) {
      return data.map(item => callback(item)).toString()
    }

    return data.toString()
  }

  private recalculateMaxPriority(): void {
    // Find the next lower priority that still has items.
    while (this.maxPriority >= 0) {
      const bucket = this.buckets[this.maxPriority]
      if (bucket && bucket.length > 0) {
        break
      }
      this.maxPriority--
    }
  }
}

export default new PriorityQueue<any>()

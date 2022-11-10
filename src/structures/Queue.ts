import isFunction from '~/is/isFunction'

export class Queue<T> {
  protected data: T[] = []

  public push(item: T): void {
    this.data.push(item)
  }

  public pull(): T | undefined {
    return !this.isEmpty() ? this.data.shift() : undefined
  }

  public peek(): T | undefined {
    return !this.isEmpty() ? this.data[0] : undefined
  }

  public size(): number {
    return this.data.length
  }

  public isEmpty(): boolean {
    return this.data.length === 0
  }

  public toArray(): T[] {
    return this.data
  }

  public reset(): void {
    this.data.length = 0
  }

  public toString(callback?: (i: T) => any): string {
    const data = this.toArray()

    if (callback && isFunction(callback)) {
      return data.map(item => callback(item)).toString()
    }

    return data.toString()
  }
}

export default new Queue()

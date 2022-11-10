import isFunction from '~/is/isFunction'

export class Stack<T> {
  protected data: T[] = []

  public push(item: T): void {
    this.data.push(item)
  }

  public pull(): T | undefined {
    return !this.isEmpty() ? this.data.pop() : undefined
  }

  public peek(): T | undefined {
    return !this.isEmpty() ? this.data[this.size() - 1] : undefined
  }

  public size(): number {
    return this.data.length
  }

  public isEmpty(): boolean {
    return this.data.length === 0
  }

  public toArray(): T[] {
    return [...this.data].reverse()
  }

  public toString(callback?: (i: T) => any): string {
    const data = this.toArray()

    if (callback && isFunction(callback)) {
      return data.map(item => callback(item)).toString()
    }

    return data.toString()
  }
}

export default new Stack()

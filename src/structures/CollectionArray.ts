import isFunction from '~/is/isFunction'
import toString from '~/to/toString'

export class CollectionArray<T> {
  protected items: T[] = []

  public push(item: T): void {
    this.items.push(item)
  }

  public pull(): T | undefined {
    return !this.isEmpty() ? this.items.pop() : undefined
  }

  public size(): number {
    return this.items.length
  }

  public isEmpty(): boolean {
    return this.size() === 0
  }

  public toArray(): T[] {
    return [...this.items]
  }

  public toString(callback?: (i: T) => any): string {
    const data = this.toArray()

    if (callback && isFunction(callback)) {
      return data.map(item => callback(item)).toString()
    }

    return data.toString()
  }

  public map<R extends any>(callback: (i: T) => any): R[] {
    const data = this.toArray()

    if (!isFunction(callback)) {
      throw Error('Invalid map-function: ' + toString(callback))
    }

    return data.map(item => callback(item))
  }
}

export default new CollectionArray()

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

  public toString(callback?: (i: T) => unknown): string {
    if (callback && isFunction(callback)) {
      return this.items.map(item => callback(item)).toString()
    }
    return this.items.toString()
  }

  public map<R>(callback: (i: T, index: number, array: readonly T[]) => R): R[] {
    if (!isFunction(callback)) {
      throw Error(`Invalid map-function: ${toString(callback)}`)
    }
    return this.items.map((item, index, array) => callback(item, index, array))
  }
}

export default new CollectionArray()

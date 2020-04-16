import isFunction from '../is/isFunction'

export class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  pull() {
    return !this.isEmpty() ? this.data.pop() : null
  }

  peek() {
    return !this.isEmpty() ? this.data[this.size() - 1] : null
  }

  size() {
    return this.data.length
  }

  isEmpty() {
    return this.data.length === 0
  }

  toArray() {
    return [...this.data].reverse()
  }

  toString(callback) {
    const data = this.toArray()

    if (isFunction(callback)) {
      return data.map((item) => callback(item)).toString()
    }

    return data.toString()
  }
}

export default new Stack()

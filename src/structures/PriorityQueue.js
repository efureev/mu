import { Queue } from './Queue'

const DEFAULT_PRIORITY = 0

export class PriorityQueue extends Queue {
  constructor() {
    super()
    //this.data[DEFAULT_PRIORITY] = []
  }

  push(item, priority = DEFAULT_PRIORITY) {
    if (this.data[priority] === undefined) {
      this.data[priority] = []
    }
    this.data[priority].push(item)
  }

  pull() {
    if (this.isEmpty()) {
      return null
    }

    const m = Math.max(...this.data.keys())

    console.log(m)
    console.log(this.data)

    const result = this.data[m].shift()

    if (this.data[m].length === 0) {
      this.data.splice(m, 1)
    }

    return result
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    const m = Math.max(...this.data.keys())

    return this.data[m][0]
  }

  toArray() {
    return this.data.reduceRight((previousGroup, nextGroup) => {
      return previousGroup.concat(nextGroup)
    }, [])
  }

  size() {
    return this.data.reduce((previous, nextGroup) => {
      return previous + nextGroup.length
    }, 0)
  }
}

export default new PriorityQueue()

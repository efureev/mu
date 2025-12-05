import { PriorityQueue } from '~/structures/PriorityQueue'

describe('PriorityQueue', () => {
  const DEFAULT_PRIORITY = 0

  describe('push', () => {
    it('should add an item with the given priority', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 2)
      expect(pq.size()).toBe(1)
      expect(pq.toArray()).toEqual([10])
    })

    it('should add an item with default priority when no priority is specified', () => {
      const pq = new PriorityQueue<number>()
      pq.push(20)
      expect(pq.size()).toBe(1)
      expect(pq.toArray()).toEqual([20])
    })

    it('should throw an error for invalid negative priority', () => {
      const pq = new PriorityQueue<number>()
      expect(() => pq.push(30, -1)).toThrow(TypeError)
    })

    it('should throw an error for non-finite priority', () => {
      const pq = new PriorityQueue<number>()
      expect(() => pq.push(40, Infinity)).toThrow(TypeError)
    })
  })

  describe('pull', () => {
    it('should remove and return the highest priority item', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 2)
      pq.push(30, 0)

      expect(pq.pull()).toBe(20)
      expect(pq.size()).toBe(2)
      expect(pq.toArray()).toEqual([10, 30])
    })

    it('should return undefined when pulling from an empty queue', () => {
      const pq = new PriorityQueue<number>()
      expect(pq.pull()).toBeUndefined()
    })
  })

  describe('peek', () => {
    it('should return the highest priority item without removing it', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 2)

      expect(pq.peek()).toBe(20)
      expect(pq.size()).toBe(2)
    })

    it('should return undefined when peeking into an empty queue', () => {
      const pq = new PriorityQueue<number>()
      expect(pq.peek()).toBeUndefined()
    })
  })

  describe('toArray', () => {
    it('should return an array of all items sorted by priority and insertion order', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 0)
      pq.push(30, 1)

      expect(pq.toArray()).toEqual([10, 30, 20])
    })

    it('should return an empty array for an empty queue', () => {
      const pq = new PriorityQueue<number>()
      expect(pq.toArray()).toEqual([])
    })
  })

  describe('size', () => {
    it('should return the number of items in the queue', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 2)

      expect(pq.size()).toBe(2)
    })

    it('should return zero for an empty queue', () => {
      const pq = new PriorityQueue<number>()
      expect(pq.size()).toBe(0)
    })
  })

  describe('isEmpty', () => {
    it('should return true if the queue is empty', () => {
      const pq = new PriorityQueue<number>()
      expect(pq.isEmpty()).toBe(true)
    })

    it('should return false if the queue is not empty', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      expect(pq.isEmpty()).toBe(false)
    })
  })

  describe('reset', () => {
    it('should clear all items from the queue', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 2)

      pq.reset()
      expect(pq.size()).toBe(0)
      expect(pq.isEmpty()).toBe(true)
    })
  })

  describe('toString', () => {
    it('should return a default string representation of the items', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 0)

      expect(pq.toString()).toBe('10,20')
    })

    it('should return a custom string representation based on the callback', () => {
      const pq = new PriorityQueue<number>()
      pq.push(10, 1)
      pq.push(20, 0)

      expect(pq.toString(item => `Item: ${item}`)).toBe('Item: 10,Item: 20')
    })
  })
})

// CollectionArray.test.ts
import { CollectionArray } from '~/structures/CollectionArray'

describe('CollectionArray', () => {
  describe('push', () => {
    it('should add an item to the collection', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      expect(collection.size()).toBe(1)
      expect(collection.toArray()).toEqual([1])
    })
  })

  describe('pull', () => {
    it('should remove and return the last item from the collection', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      collection.push(2)
      const pulled = collection.pull()
      expect(pulled).toBe(2)
      expect(collection.size()).toBe(1)
      expect(collection.toArray()).toEqual([1])
    })

    it('should return undefined if the collection is empty', () => {
      const collection = new CollectionArray<number>()
      const pulled = collection.pull()
      expect(pulled).toBeUndefined()
    })
  })

  describe('size', () => {
    it('should return the correct size of the collection', () => {
      const collection = new CollectionArray<string>()
      expect(collection.size()).toBe(0)
      collection.push('a')
      expect(collection.size()).toBe(1)
      collection.push('b')
      expect(collection.size()).toBe(2)
    })
  })

  describe('isEmpty', () => {
    it('should return true if the collection is empty', () => {
      const collection = new CollectionArray<number>()
      expect(collection.isEmpty()).toBe(true)
    })

    it('should return false if the collection is not empty', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      expect(collection.isEmpty()).toBe(false)
    })
  })

  describe('toArray', () => {
    it('should return an array of items in the collection', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      collection.push(2)
      expect(collection.toArray()).toEqual([1, 2])
    })
  })

  describe('toString', () => {
    it('should return a comma-separated string of items in the collection', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      collection.push(2)
      expect(collection.toString()).toBe('1,2')
    })

    it('should use the callback function to transform items before converting to string', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      collection.push(2)
      const result = collection.toString(item => `Item: ${item}`)
      expect(result).toBe('Item: 1,Item: 2')
    })
  })

  describe('map', () => {
    it('should return a new array with items transformed by the callback function', () => {
      const collection = new CollectionArray<number>()
      collection.push(1)
      collection.push(2)
      const mapped = collection.map(item => item * 2)
      expect(mapped).toEqual([2, 4])
    })
  })
})

import { arrayEach } from '../../src/array'

describe('arrayEach', () => {
  it('Basic', () => {
    const array = [1, 2, 3]

    const result = []

    arrayEach(array, item => {
      result.push(item.toString())
    })

    expect(result).toEqual(['1', '2', '3'])
  })

  it('Break', () => {
    const array = [1, 2, 3]

    const result = []

    arrayEach(array, item => {
      if (item === 3) return false
      result.push(item.toString())
    })

    expect(result).toEqual(['1', '2'])
  })
})

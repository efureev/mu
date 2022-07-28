import { difference } from '../../src/array'

describe('difference', () => {
  it('Base', () => {
    expect(difference([1, 2, 3, 4, 5], [1, 4, 8])).toEqual([2, 3, 5])
    expect(difference([2], [1, 4, 8])).toEqual([2])
  })

  it('should be empty', () => {
    expect(difference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toEqual([])
    expect(difference([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 4, 3, 1, 245, 6, 7])).toEqual([])
  })
})

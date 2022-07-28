import { intersect, intersectAll } from '../../src/array'

describe('intersect', () => {
  it('Array', () => {
    expect(intersect([1, 2, 3, 4, 5], [1, 4, 8])).toEqual([1, 4])
    expect(intersect([1, 2, 3, 4, 5, 1, 3], [1])).toEqual([1])
  })

  it('shoud be empty', () => {
    expect(intersect([1, 2, 3, 4, 5], [])).toEqual([])
    expect(intersect([], [])).toEqual([])
    expect(intersect([], [1, 2, 3, 4])).toEqual([])
    expect(intersect([5, 6, 7, 8], [1, 2, 3, 4])).toEqual([])
  })
})

describe('intersectAll', () => {
  it('Array', () => {
    expect(intersectAll([1, 2, 3, 4, 5], [1, 4, 8])).toEqual([1, 4])
    expect(intersectAll([1, 2, 3, 4, 5], [1, 4, 8], [1, 4])).toEqual([1, 4])
    expect(intersectAll([1, 2, 3, 4, 5], [1, 4, 8], [1])).toEqual([1])
  })

  it('shoud be empty', () => {
    expect(intersect([1, 2, 3, 4, 5], [])).toEqual([])
    expect(intersect([], [])).toEqual([])
    expect(intersect([], [1, 2, 3, 4])).toEqual([])
    expect(intersect([5, 6, 7, 8], [9])).toEqual([])
  })
})

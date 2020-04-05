import {clear} from '../../src/array'

describe('clear', () => {
  it('Array', () => {
    const array = [1, 2, 3, 4, 5]
    clear(array)
    expect(array).toEqual([])
  })
})

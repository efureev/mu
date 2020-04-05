import isArrayLike from './../../src/is/isArrayLike'

describe('isArrayLike', () => {

  it('should return false', () => {
    const list = [123, 0, null, undefined, {}, () => {
    }, new Date(), false, true, 12.4]

    list.forEach((value) => {
      expect(isArrayLike(value)).toEqual(false)
    })
  })

  it('should return true', () => {
    const list = [[], [1, 2, 3], '', 'test', '123']

    list.forEach((value) => {
      expect(isArrayLike(value)).toEqual(true)
    })
  })

})

import {isLength} from './../../src/is'

describe('isLength', () => {
  it('It should return FALSE', () => {
    const list = ['', 'test', [], true, false, [], {}, [12], {a: 2}, () => {
    }, new Date(), -12, Number.MIN_VALUE, '12', '2', Number.MAX_VALUE, Number.NaN, Infinity]

    list.forEach((value) => {
      expect(isLength(value)).toEqual(false)
    })
  })

  it('It should return TRUE', () => {
    const list = [12, 0, 2, Number.MAX_SAFE_INTEGER]

    list.forEach((value) => {
      expect(isLength(value)).toEqual(true)
    })
  })
})

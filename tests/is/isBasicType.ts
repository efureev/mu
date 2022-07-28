import { isBasicType } from './../../src/is'
import { isAdvancedType } from '../../src'

describe('isBasicType', () => {
  it('should return TRUE', () => {
    const list = [
      0,
      200,
      1,
      -1,
      2.3,
      -1.2,
      -1,
      ',',
      '',
      null,
      undefined,
      true,
      false,
      Number.MAX_SAFE_INTEGER,
      Number.MAX_VALUE,
      Number.MIN_VALUE,
    ]
    list.forEach(value => {
      expect(isBasicType(value)).toBe(true)
      expect(isAdvancedType(value)).toBe(false)
    })
  })

  it('should return FALSE', () => {
    const list = [[], [1], {}, { a: 2 }, new Date(), Symbol(), Symbol('a'), () => {}]
    list.forEach(value => {
      expect(isBasicType(value)).toBe(false)
      expect(isAdvancedType(value)).toBe(true)
    })
  })
})

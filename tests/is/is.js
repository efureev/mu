import {isBoolean, isNumeric, isString} from './../../src/is'

describe('isString', () => {
  it('should return true if any parameters provided are string', () => {
    expect(isString('')).toBe(true)
    expect(isString('test')).toBe(true)
    expect(isString('2')).toBe(true)
    expect(isString('cnasy&&^%#&WHD')).toBe(true)
  })

  it('should return false if any parameters are not an string', () => {
    expect(isString(2.5)).toBe(false)
    expect(isString(2, 2.5)).toBe(false)
  })
})


describe('isNumeric', () => {
  it('should return true if any parameters provided are Numeric', () => {
    expect(isNumeric('12312')).toBe(true)
    expect(isNumeric('21', 2312)).toBe(true)
    expect(isNumeric('-12', 23123)).toBe(true)
    expect(isNumeric('637126376512635712367512765')).toBe(true)
    expect(isNumeric(2.5)).toBe(true)
    expect(isNumeric(2, '2.5')).toBe(true)
  })

  it('should return false if any parameters are not an Numeric', () => {
    expect(isNumeric(NaN)).toBe(false)
    expect(isNumeric(NaN, NaN, -NaN)).toBe(false)
    expect(isNumeric(Infinity)).toBe(false)
    expect(isNumeric(-Infinity)).toBe(false)

    expect(isNumeric('dasdas')).toBe(false)
    expect(isNumeric('')).toBe(false)
    expect(isNumeric(null)).toBe(false)
    expect(isNumeric([])).toBe(false)
    expect(isNumeric({})).toBe(false)
    expect(isNumeric(true)).toBe(false)
  })
})

describe('isBoolean', () => {
  it('should return true if any parameters provided are boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(true, false)).toBe(true)
    expect(isBoolean(true, true, false)).toBe(true)
  })

  it('should return false if any parameters are not an boolean', () => {
    expect(isBoolean('true')).toBe(false)
    expect(isBoolean('false')).toBe(false)
    expect(isBoolean('')).toBe(false)
    expect(isBoolean(null)).toBe(false)
    expect(isBoolean(1212)).toBe(false)
    expect(isBoolean('1212')).toBe(false)
    expect(isBoolean([])).toBe(false)
    expect(isBoolean({})).toBe(false)
    expect(isBoolean(true, 'true')).toBe(false)
  })
})

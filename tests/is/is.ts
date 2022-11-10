import { isBoolean, isBooleans, isNumeric, isString, isStrings, isNumerics } from '~/is'

describe('isString', () => {
  it('should return true if any parameters provided are string', () => {
    expect(isString('')).toBe(true)
    expect(isString('test')).toBe(true)
    expect(isString('2')).toBe(true)
    expect(isString('cnasy&&^%#&WHD')).toBe(true)
    expect(isStrings('2', '2.5')).toBeTruthy()
  })

  it('should return false if any parameters are not an string', () => {
    expect(isString(2.5)).toBe(false)
    expect(isStrings(2, 2.5)).toBe(false)
  })
})

describe('isNumeric', () => {
  it('should return true if any parameters provided are Numeric', () => {
    expect(isNumeric('12312')).toBe(true)
    expect(isNumerics('21', 2312)).toBe(true)
    expect(isNumerics('-12', 23123)).toBe(true)
    expect(isNumeric('637126376512635712367512765')).toBe(true)
    expect(isNumeric(2.5)).toBe(true)
    expect(isNumerics(2, '2.5')).toBe(true)
  })

  it('should return false if any parameters are not an Numeric', () => {
    expect(isNumeric(NaN)).toBe(false)
    expect(isNumerics(NaN, NaN, -NaN)).toBe(false)
    expect(isNumeric(Infinity)).toBe(false)
    expect(isNumeric(-Infinity)).toBe(false)

    expect(isNumeric('dasdas')).toBe(false)
    expect(isNumeric('')).toBe(false)
    expect(isNumeric(null)).toBe(false)
    expect(isNumeric([])).toBe(false)
    expect(isNumeric([12])).toBe(false)
    expect(isNumeric({})).toBe(false)
    expect(isNumeric({ a: 2 })).toBe(false)
    expect(isNumeric(true)).toBe(false)
    expect(isNumeric(new Date())).toBe(false)
  })
})

describe('isBoolean', () => {
  it('should return true if any parameters provided are boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBooleans(true, false)).toBe(true)
    expect(isBooleans(true, true, false)).toBe(true)
  })

  it('should return false if any parameters are not an boolean', () => {
    expect(isBooleans('true')).toBe(false)
    expect(isBooleans('false')).toBe(false)
    expect(isBooleans('')).toBe(false)
    expect(isBooleans(null)).toBe(false)
    expect(isBooleans(1212)).toBe(false)
    expect(isBooleans('1212')).toBe(false)
    expect(isBooleans([])).toBe(false)
    expect(isBooleans({})).toBe(false)
    expect(isBooleans(true, 'true')).toBe(false)
  })
})

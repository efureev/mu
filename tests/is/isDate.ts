import { isDate, isDates } from './../../src/is'

describe('isDate', () => {
  it('should return true if any parameters provided are string', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date('2020-01-02'))).toBe(true)
  })

  it('should return true if any parameters provided are string', () => {
    expect(isDates(new Date(), new Date('2020-01-02'))).toBe(true)
    expect(isDates(new Date(), new Object({}))).toBe(false)
  })

  it('should return false if any parameters are not an string', () => {
    expect(isDate('')).toBe(false)
    expect(isDate(123)).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate(/123/)).toBe(false)
    expect(isDate(Symbol(2))).toBe(false)
  })
})

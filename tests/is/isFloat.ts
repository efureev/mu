import { isFloat, isFloatCanonical, isFloats } from '~/is'

describe('isFloat', () => {
  it('should return true if any parameters are a float', () => {
    expect(isFloat('+2.212')).toBe(true)
    expect(isFloat(+2.212)).toBe(true)
    expect(isFloat(2.5)).toBe(true)
    expect(isFloat(3.14)).toBe(true)
    expect(isFloat('3.14')).toBe(true)
    expect(isFloat('0.0314E+2')).toBe(true)
    expect(isFloat(-2.2121212)).toBe(true)
    expect(isFloat(-0.000004)).toBe(true)
    expect(isFloat(0.000004)).toBe(true)
  })

  it('should return false if any parameters are not a float', () => {
    expect(isFloat(2)).toBe(false)
    expect(isFloat(-2)).toBe(false)
    expect(isFloat(22)).toBe(false)
    expect(isFloat(2.0)).toBe(false)
    expect(isFloat('2.0')).toBe(false)
    expect(isFloat('-2.0')).toBe(false)
    expect(isFloat(-2.0)).toBe(false)
  })
})

describe('isFloats', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isFloats()).toThrow()
  })

  it('should throw an error if any parameters provided are not numbers', () => {
    expect(() => isFloats('')).toThrow()
    expect(() => isFloats('test', 2)).toThrow()
  })

  it('should return true if any parameters are a float', () => {
    expect(isFloats('+2.212', +2.212, 2.5, 3.14, '0.0314E+2')).toBe(true)
  })
})

describe('isFloatCanonical', () => {
  const list = ['0.0', '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14']

  it('should return TRUE', () => {
    for (const v of list) {
      expect(isFloatCanonical(v)).toBe(true)
    }
  })
})

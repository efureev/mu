import { isEven, isEvens } from '~/is'

describe('IsEven', () => {
  it('should return true when all parameters are even numbers', () => {
    expect(isEven(1)).toBe(false)
    expect(isEven(2)).toBe(true)
    expect(isEven(50)).toBe(true)
    expect(isEven(54)).toBe(true)
  })

  it('should return true when all parameters are even numbers', () => {
    expect(isEvens(2, 4, 200)).toBe(true)
  })

  it('should return false when all parameters are odd numbers', () => {
    expect(isEvens(1, 3, 1)).toBe(false)
  })

  it('should return false when any parameter is a floating point numbers', () => {
    expect(isEvens(2, 4, 200.22)).toBe(false)
  })

  it('should return false when a string with an odd number is passed', () => {
    expect(isEvens(2, 4, '5')).toBe(false)
  })

  it('should return true when a string with an even number is passed', () => {
    expect(isEvens(2, 4, '8')).toBe(true)
  })

  it('should return false when an object is passed', () => {
    expect(isEvens(2, 4, {})).toBe(false)
  })

  it('should return false when an array is passed', () => {
    expect(isEvens(2, 4, [])).toBe(false)
  })

  it('should return false when a boolean is passed', () => {
    expect(isEvens(2, 4, true)).toBe(false)
  })
})

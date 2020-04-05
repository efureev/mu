import {isFunction} from './../../src/is'

describe('isFunction', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isFunction()).toThrow()
  })

  it('should return false if any parameters are not an function', () => {
    expect(isFunction([])).toBe(false)
    expect(isFunction(2.5)).toBe(false)
    expect(isFunction(2, 2.5)).toBe(false)
    expect(isFunction('sdas')).toBe(false)
    expect(isFunction('sdas', '2312')).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction('')).toBe(false)
    expect(isFunction('')).toBe(false)
    expect(isFunction(new Number(2))).toBe(false)
    expect(isFunction(Symbol())).toBe(false)
    expect(isFunction(Symbol('dfo'))).toBe(false)
    expect(isFunction(new Set([1, 2]))).toBe(false)
    expect(isFunction(new Set([]))).toBe(false)
    expect(isFunction(new String('sas'))).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction({}, {})).toBe(false)
    expect(isFunction({'re': 1, 'test': 2})).toBe(false)
    expect(isFunction({}, {'re': 1, 'test': null})).toBe(false)
    expect(isFunction({'re': 1, 'test': {'re': 1, 'test': {'re': 1, 'test': 2}}})).toBe(false)
  })

  it('should return true if all parameters are function', () => {
    expect(isFunction(new Function())).toBe(true)
    expect(isFunction(function () {
    })).toBe(true)
    expect(isFunction(() => {
    })).toBe(true)
  })

})

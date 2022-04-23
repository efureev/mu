import clone from '../../src/core/clone.js'
import { isArray, isEmpty, isFunction } from '../../src/is'

describe('clone', () => {
  it('should return number if parameter provided are numbers', () => {
    expect(clone(1)).toBe(1)
    expect(clone(0)).toBe(0)
    expect(clone(-0)).toBe(-0)
    expect(clone(1212)).toBe(1212)
    expect(clone(-1212)).toBe(-1212)
    expect(clone(12.32)).toBe(12.32)
  })

  it('should return string if parameter provided are string', () => {
    expect(clone('test')).toBe('test')
    expect(clone('')).toBe('')
    expect(clone('   test  ')).toBe('   test  ')
    expect(clone('\ttest\n')).toBe('\ttest\n')
  })

  it('should return object if parameter provided are object', () => {
    expect(clone({})).toEqual({})
    expect(clone({ key: 'value' })).toEqual({ key: 'value' })
    expect(clone({ key: 'value', dig: 12 })).toEqual({ key: 'value', dig: 12 })
    expect(clone({ key: 'value', dig: { key: 'value' } })).toEqual({ key: 'value', dig: { key: 'value' } })
  })

  it('should return object if parameter provided are date', () => {
    const d = new Date()
    expect(clone(d)).toEqual(d)
  })

  it('should return array if parameter provided are array', () => {
    const c = clone([])
    expect(isArray(c)).toBeTruthy()
    expect(isEmpty(c)).toBeTruthy()
    expect(clone([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    expect(clone([])).toEqual([])
  })

  const fn = (a, b) => a + b

  it('should return string if parameter provided are mixed', () => {
    expect(clone()).toBeUndefined()
    expect(clone(null)).toBeNull()
    expect(clone(undefined)).toBeUndefined()
    expect(clone(true)).toBe(true)
    expect(clone(false)).toBe(false)
    expect(isFunction(clone(new Function()))).toBeTruthy()
    expect(fn(4, 2)).toBe(clone(fn)(4, 2))
  })

  it('should return true', () => {
    const obj = {
      firstName: 'John',
      lastName: 'Doe',
      id: 5566,
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      },
    }
    expect(clone(obj)).toEqual(obj)
    expect(clone(obj)).toStrictEqual(obj)
  })
})

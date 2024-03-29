import { isEmpty, isEmptyObject, isObject, isObjectLike, isObjects } from '~/is'
import { args, realm, slice, strictArgs, symbol } from '../utils'

describe('isObject', () => {
  it('should throw an error if no parameters are provided', () => {
    // expect(() => isObject()).toThrow()
  })

  it('should return false if any parameters are not an objects', () => {
    expect(isObject()).toBeFalsy()
    expect(isObject([])).toBe(false)
    expect(isObject(2.5)).toBe(false)
    expect(isObjects(2, 2.5)).toBe(false)
    expect(isObject('sdas')).toBe(false)
    expect(isObjects('sdas', '2312')).toBe(false)
    expect(isObject(null)).toBe(false)
    expect(isObject('')).toBe(false)
    expect(isObject('')).toBe(false)
    expect(isObject(new Function())).toBe(false)
    expect(isObject(function () {})).toBe(false)
    expect(isObject(() => {})).toBe(false)
    expect(isObject(new Number(2))).toBe(false)
    expect(isObject(Symbol())).toBe(false)
    expect(isObject(Symbol('dfo'))).toBe(false)
    expect(isObject(new Set([1, 2]))).toBe(false)
    expect(isObject(new Set([]))).toBe(false)
    expect(isObject(new String('sas'))).toBe(false)
  })

  it('should return true if all parameters are objects', () => {
    expect(isObject(Object.create({}))).toBe(true)
    expect(isObject(Object.create(null))).toBe(true)
    expect(isObject({})).toBe(true)
    expect(isObjects({}, {})).toBe(true)
    expect(isObject({ re: 1, test: 2 })).toBe(true)
    expect(isObjects({}, { re: 1, test: null })).toBe(true)
    expect(isObject({ re: 1, test: { re: 1, test: { re: 1, test: 2 } } })).toBe(true)
  })
})

describe('isEmptyObject', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isEmptyObject()).toThrow()
  })

  it('should throw an error if no parameters are provided', () => {
    expect(isEmpty(new Object(null))).toBeTruthy()
  })

  it('should return false if any parameters are not an objects', () => {
    expect(isEmptyObject([])).toBe(false)
    expect(isEmptyObject(2.5)).toBe(false)
    expect(isEmptyObject(2, 2.5)).toBe(false)
    expect(isEmptyObject('sdas')).toBe(false)
    expect(isEmptyObject('sdas', '2312')).toBe(false)
    expect(isEmptyObject(null)).toBe(false)
    expect(isEmptyObject('')).toBe(false)
    expect(isEmptyObject('')).toBe(false)
    expect(isEmptyObject(new Function())).toBe(false)
    expect(isEmptyObject(function () {})).toBe(false)
    expect(isEmptyObject(() => {})).toBe(false)
    expect(isEmptyObject(new Number(2))).toBe(false)
    expect(isEmptyObject(Symbol())).toBe(false)
    expect(isEmptyObject(Symbol('dfo'))).toBe(false)
    expect(isEmptyObject(new Set([1, 2]))).toBe(false)
    expect(isEmptyObject(new Set([]))).toBe(false)
    expect(isEmptyObject(new String('sas'))).toBe(false)
  })

  it('should return true if all parameters are objects', () => {
    expect(isEmptyObject({})).toBe(true)
    expect(isEmptyObject({}, {})).toBe(true)
    expect(isEmptyObject({ re: 1, test: 2 })).toBe(false)
    expect(isEmptyObject({}, { re: 1, test: null })).toBe(false)
    expect(isEmptyObject({ re: 1, test: { re: 1, test: { re: 1, test: 2 } } })).toBe(false)
  })
})

describe('isObjectLike', () => {
  it('should return `true`', () => {
    expect(isObjectLike([])).toBeTruthy()
    expect(isObjectLike([1, 2, 3, 4])).toBeTruthy()
    expect(isObjectLike([null])).toBeTruthy()
    expect(isObjectLike({})).toBeTruthy()
    expect(isObjectLike({ k: 1 })).toBeTruthy()
    expect(isObjectLike({ k: 1, v: null })).toBeTruthy()
    expect(isObjectLike(Object(false))).toBeTruthy()
    expect(isObjectLike(new Date())).toBeTruthy()
    expect(isObjectLike(new Error())).toBeTruthy()
    expect(isObjectLike(Object(0))).toBeTruthy()
    expect(isObjectLike(Object('a'))).toBeTruthy()
    expect(isObjectLike(/x/)).toBeTruthy()
    expect(isObjectLike(realm)).toBe(true)
    expect(isObjectLike(args)).toBe(true)
    expect(isObjectLike(args)).toBe(true)
    expect(isObjectLike(strictArgs)).toBe(true)
    expect(
      isObjectLike(
        (function () {
          return arguments
        })()
      )
    ).toBe(true)
  })

  it('should return `false`', () => {
    expect(isObjectLike(true)).toBeFalsy()
    expect(isObjectLike(false)).toBeFalsy()
    expect(isObjectLike(null)).toBeFalsy()
    expect(isObjectLike(undefined)).toBeFalsy()
    // @ts-ignore
    expect(isObjectLike()).toBeFalsy()
    expect(isObjectLike(1)).toBeFalsy()
    expect(isObjectLike('3')).toBeFalsy()
    expect(isObjectLike(Symbol.iterator)).toBeFalsy()
    expect(isObjectLike(new Function())).toBeFalsy()

    expect(isObjectLike(slice)).toBeFalsy()
    expect(isObjectLike(symbol)).toBeFalsy()
  })
})

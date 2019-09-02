'use strict'

import {isObject, isEmptyObject} from './../../src/is'

describe('isObject', () => {
    it('should throw an error if no parameters are provided', () => {
        expect(() => isObject()).toThrow()
    })

    it('should return false if any parameters are not an objects', () => {
        expect(isObject([])).toBe(false)
        expect(isObject(2.5)).toBe(false)
        expect(isObject(2, 2.5)).toBe(false)
        expect(isObject('sdas')).toBe(false)
        expect(isObject('sdas', '2312')).toBe(false)
        expect(isObject(null)).toBe(false)
        expect(isObject('')).toBe(false)
        expect(isObject('')).toBe(false)
        expect(isObject(new Function())).toBe(false)
        expect(isObject(function () {
        })).toBe(false)
        expect(isObject(() => {
        })).toBe(false)
        expect(isObject(new Number(2))).toBe(false)
        expect(isObject(Symbol())).toBe(false)
        expect(isObject(Symbol('dfo'))).toBe(false)
        expect(isObject(new Set([1, 2]))).toBe(false)
        expect(isObject(new Set([]))).toBe(false)
        expect(isObject(new String('sas'))).toBe(false)
    })

    it('should return true if all parameters are objects', () => {
        expect(isObject({})).toBe(true)
        expect(isObject({}, {})).toBe(true)
        expect(isObject({'re': 1, 'test': 2})).toBe(true)
        expect(isObject({}, {'re': 1, 'test': null})).toBe(true)
        expect(isObject({'re': 1, 'test': {'re': 1, 'test': {'re': 1, 'test': 2}}})).toBe(true)
    })
})

describe('isEmptyObject', () => {
    it('should throw an error if no parameters are provided', () => {
        expect(() => isEmptyObject()).toThrow()
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
        expect(isEmptyObject(function () {
        })).toBe(false)
        expect(isEmptyObject(() => {
        })).toBe(false)
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
        expect(isEmptyObject({'re': 1, 'test': 2})).toBe(false)
        expect(isEmptyObject({}, {'re': 1, 'test': null})).toBe(false)
        expect(isEmptyObject({'re': 1, 'test': {'re': 1, 'test': {'re': 1, 'test': 2}}})).toBe(false)
    })
})

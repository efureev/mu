'use strict'

import isArray from './../../src/is/isArray'

describe('isArray', () => {
    it('should throw an error if no parameters are provided', () => {
        expect(() => isArray()).toThrow()
    })

    it('should return false if any parameters are not an arrays', () => {
        expect(isArray(2.5)).toBe(false)
        expect(isArray(2, 2.5)).toBe(false)
        expect(isArray('sdas')).toBe(false)
        expect(isArray('sdas', '2312')).toBe(false)
        expect(isArray(null)).toBe(false)
        expect(isArray('')).toBe(false)
        expect(isArray('')).toBe(false)
    })

    it('should return true if all parameters are arrays', () => {
        expect(isArray([])).toBe(true)
        expect(isArray([], [])).toBe(true)
        expect(isArray([2122, 21212])).toBe(true)
        expect(isArray([], [-1212, 3, 'dasdas'])).toBe(true)
        expect(isArray([[], [], []], [{}, {}, {}])).toBe(true)
    })

})

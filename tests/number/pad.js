'use strict'

import {pad} from './../../src/number/pad'

describe('pad', () => {
    it('should throw an error if no parameters are provided', () => {
        expect(() => pad()).toThrow()
        expect(() => pad('')).toThrow()
        expect(() => pad('test')).toThrow()
    })

    it('should return val if parameter provided are numbers', () => {
        expect(pad('1')).toBe('01')
        expect(pad(1)).toBe('01')
        expect(pad(9)).toBe('09')
        expect(pad('01')).toBe('01')
        expect(pad(+'01')).toBe('01')
        expect(pad('9')).toBe('09')
        expect(pad('09')).toBe('09')
        expect(pad('109')).toBe('109')
        expect(pad('10')).toBe('10')
    })
})

'use strict'

import {toNumber} from './../../src/to'

describe('toNumber', () => {
    it('should be true', () => {
        expect(toNumber('1')).toBe(1)
        expect(toNumber(1)).toBe(1)
        expect(toNumber('001')).toBe(1)
        expect(toNumber('001.2')).toBe(1.2)
        expect(toNumber(1.2)).toBe(1.2)
        expect(toNumber(-1.2)).toBe(-1.2)
        expect(toNumber('-1.2')).toBe(-1.2)
        expect(toNumber('')).toBe(0)
        expect(toNumber('')).toBe(0)
        expect(toNumber(Infinity)).toBe(Infinity)
        expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e+308)
        expect(toNumber(Number.MAX_SAFE_INTEGER)).toBe(9007199254740991)
        expect(toNumber(new Function())).toBe(NaN)
        expect(toNumber('test')).toBe(NaN)
    })
})

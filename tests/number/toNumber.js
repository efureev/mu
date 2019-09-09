'use strict'

import {toNumber} from './../../src/number'
import {INFINITY, MAX_INTEGER} from '../../src/config'

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
        expect(toNumber(INFINITY)).toBe(Infinity)
        expect(toNumber(MAX_INTEGER)).toBe(1.7976931348623157e+308)
        expect(toNumber(new Function())).toBe(NaN)
        expect(toNumber('test')).toBe(NaN)
    })
})

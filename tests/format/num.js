'use strict'

import {num, numRus} from './../../src/format'

describe('num', () => {
    it('should return string if parameter provided are integer', () => {
        expect(num(10000)).toBe('10,000.00')
        expect(num(1)).toBe('1.00')
        expect(num(10)).toBe('10.00')
        expect(num(100)).toBe('100.00')
        expect(num(1000)).toBe('1,000.00')
        expect(num(1001)).toBe('1,001.00')
    })

    it('should return string if parameter provided are strings', () => {
        expect(num('10000')).toBe('10,000.00')
        expect(num('1')).toBe('1.00')
        expect(num('10')).toBe('10.00')
        expect(num('100')).toBe('100.00')
        expect(num('1000')).toBe('1,000.00')
        expect(num('1001')).toBe('1,001.00')
    })

    it('should return string if parameter provided are float', () => {
        expect(num(10000.12)).toBe('10,000.12')
        expect(num(1.01)).toBe('1.01')
        expect(num(10.00)).toBe('10.00')
        expect(num(100.0)).toBe('100.00')
        expect(num(1000.0000)).toBe('1,000.00')
        expect(num(1001.0001)).toBe('1,001.00')
    })

    it('should return string if parameter provided are mixed', () => {
        expect(num(10000, 3)).toBe('10,000.000')
        expect(num(1.234, 3, '-')).toBe('1-234')
        expect(num(10000.234, 3, ':', '|')).toBe('10|000:234')
        expect(num(10000.234, 3, ':', '|', true)).toBe('10|000:234')
        expect(num(10000, 3, ':', '|', true)).toBe('10|000')
    })
})


describe('numRus', () => {
    it('should return string if parameter provided are mixed', () => {
        expect(numRus('10000')).toBe('10 000')
        expect(numRus(10000)).toBe('10 000')
        expect(numRus(1)).toBe('1')
        expect(numRus(10)).toBe('10')
        expect(numRus(100)).toBe('100')
        expect(numRus(1000)).toBe('1 000')
        expect(numRus(1001)).toBe('1 001')
        expect(numRus(1001.20)).toBe('1 001.20')
        expect(numRus(1001.00)).toBe('1 001')
        expect(numRus('1001.00')).toBe('1 001')
        expect(numRus('1001.00', 3)).toBe('1 001')
        expect(numRus('1001.01', 3)).toBe('1 001.010')
    })

})


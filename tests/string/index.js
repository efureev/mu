'use strict'

import {trim} from './../../src/string'

describe('trim', () => {

    it('should return val if parameter provided are numbers', () => {
        expect(trim('1')).toBe('1')
        expect(trim(1)).toBe('1')
        expect(trim(' 1')).toBe('1')
        expect(trim(' 1   ')).toBe('1')
        expect(trim('    1   ')).toBe('1')
        expect(trim('    1   ')).toBe('1')
    })

    it('should return val if parameter provided are string', () => {
        expect(trim('test')).toBe('test')
        expect(trim('test    ')).toBe('test')
        expect(trim('   test')).toBe('test')
        expect(trim('   test    ')).toBe('test')
        expect(trim('   test\t  ')).toBe('test')
        expect(trim('\ttest\t  ')).toBe('test')
        expect(trim('\ntest\n  ')).toBe('test')
        expect(trim('\n\t\t\n\ntest\n  ')).toBe('test')
        expect(trim(' \n\t\rtest\r\n  ')).toBe('test')
    })

    it('should return val if parameter provided are mixed', () => {
        expect(trim('')).toBe('')
        expect(trim('    ')).toBe('')
        expect(trim('\t\t\n ')).toBe('')
        expect(trim(null)).toBe('')
        expect(trim(undefined)).toBe('')
        expect(trim(0)).toBe('0')
        expect(trim(-0)).toBe('0')
    })
})

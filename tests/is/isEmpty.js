'use strict'

import {isEmpty} from './../../src/is/isEmpty'

describe('IsEmpty', () => {
    it('should return true when you pass an empty string', () => {
        expect(isEmpty('')).toBeTruthy()
        expect(isEmpty('  ')).toBeTruthy()

        expect(isEmpty('test')).toBeFalsy()
        expect(isEmpty('  test  ')).toBeFalsy()
    })

    it('should return true when you pass 0', () => {
        expect(isEmpty(0)).toBeTruthy()
        expect(isEmpty(-0)).toBeTruthy()
        expect(isEmpty(10)).toBeFalsy()
        expect(isEmpty(-10)).toBeFalsy()
    })

    it('should return true when you pass an empty object', () => {
        expect(isEmpty({})).toBeTruthy()
        expect(isEmpty({sa: 1})).toBeFalsy()
        expect(isEmpty({null: null})).toBeFalsy()
    })

    it('should return true when you pass an empty array', () => {
        expect(isEmpty([])).toBeTruthy()
        expect(isEmpty([2])).toBeFalsy()
        expect(isEmpty([null])).toBeFalsy()
        expect(isEmpty([undefined])).toBeFalsy()
        expect(isEmpty([[]])).toBeFalsy()
        expect(isEmpty([{}])).toBeFalsy()
    })

    it('should return true when you pass false', () => {
        expect(isEmpty(true)).toBeTruthy()
        expect(isEmpty(false)).toBeFalsy()
    })

    it('should return true when you pass date', () => {
        expect(isEmpty(new Date())).toBeFalsy()
        expect(isEmpty(new Date(Date.parse('1970-01-01T00:00:00')))).toBeFalsy()
        expect(isEmpty(new Date(0))).toBeFalsy()
    })
})

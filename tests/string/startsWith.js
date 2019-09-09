'use strict'

import {startsWith} from './../../src/string'

describe('startsWith', () => {

    it('', () => {
        const string = 'abc'
        expect(startsWith(string, 'a')).toBeTruthy()
        expect(startsWith(string, 'ab')).toBeTruthy()
        expect(startsWith(string, 'abc')).toBeTruthy()
        expect(startsWith(string, '')).toBeTruthy()
        expect(startsWith('', '')).toBeTruthy()
        expect(startsWith('', 'as')).toBeFalsy()
        expect(startsWith(string, 'b')).toBeFalsy()
        expect(startsWith(string, 'c')).toBeFalsy()
        expect(startsWith(string, 'bc')).toBeFalsy()
    })
})

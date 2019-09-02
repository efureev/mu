'use strict'

import {fileSize} from './../../src/humanize'

describe('intWord', () => {
    it('should return val if parameter provided are numbers', () => {
        expect(fileSize(3123123)).toBe('2.98 Mb')
        expect(fileSize(123)).toBe('123 bytes')
        expect(fileSize(21323)).toBe('20.82 Kb')
        expect(fileSize(7900221323)).toBe('7.36 Gb')
    })
})

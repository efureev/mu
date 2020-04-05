import {intWord} from './../../src/format'

describe('intWord', () => {
  it('should return val if parameter provided are numbers', () => {
    expect(intWord(3123123)).toBe('3.12M')
    expect(intWord(123)).toBe('123.00')
    expect(intWord(21323)).toBe('21.32K')
    expect(intWord(7900221323)).toBe('7.90B')
  })
})

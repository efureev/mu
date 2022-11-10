import { padStart } from '~/string'

describe('padStart', () => {
  it('should return val if parameter provided are numbers', () => {
    expect(padStart('1', 2, '0')).toBe('01')
    expect(padStart(1, 2, '0')).toBe('01')
    expect(padStart(9, 3, '0')).toBe('009')
    expect(padStart('01', 4, '0')).toBe('0001')
    expect(padStart(+'01', 4, '0')).toBe('0001')
    expect(padStart('09', 1, '0')).toBe('09')
    expect(padStart('109', 3, '0')).toBe('109')
    expect(padStart('10', 2, '0')).toBe('10')
  })
})

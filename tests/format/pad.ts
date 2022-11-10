import { padDateTime, padNumber } from '~/format'

describe('padNumber', () => {
  it('should return val', () => {
    expect(padNumber('1', 2)).toBe('01')
    expect(padNumber(1, 2)).toBe('01')
    expect(padNumber(12, 3)).toBe('012')
    expect(padNumber(12, 6)).toBe('000012')
    expect(padNumber(null, 2)).toBe('0')
  })
})

describe('padDateTime', () => {
  it('should return val', () => {
    expect(padDateTime('1')).toBe('01')
    expect(padDateTime(1)).toBe('01')
    expect(padDateTime(12)).toBe('12')
    expect(padDateTime(0)).toBe('00')
    expect(padDateTime(null)).toBe('00')
  })
})

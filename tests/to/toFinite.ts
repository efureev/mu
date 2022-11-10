import toFinite from '~/to/toFinite'
import { Inf } from '../utils'

describe('toFinite', () => {
  it('should be true', () => {
    expect(toFinite(3.2)).toBe(3.2)
    expect(toFinite('3.2')).toBe(3.2)
    expect(toFinite('3')).toBe(3)
    expect(toFinite(true)).toBe(1)
    expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
    expect(toFinite(Number.MAX_VALUE)).toBe(Number.MAX_VALUE)
    expect(toFinite(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER)
    expect(toFinite(Infinity)).toBe(Inf)
  })
})

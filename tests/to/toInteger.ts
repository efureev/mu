import toInteger from '../../src/to/toInteger'
import { Inf, NegInf } from '../utils'

describe('toInteger', () => {
  it('should be true', () => {
    expect(toInteger('1')).toBe(1)
    expect(toInteger(1)).toBe(1)
    expect(toInteger(1212)).toBe(1212)
    expect(toInteger('1212')).toBe(1212)
    expect(toInteger('12.42')).toBe(12)
    expect(toInteger(12.1)).toBe(12)
    expect(toInteger('12.99')).toBe(12)
    expect(toInteger(12.99)).toBe(12)
    expect(toInteger(() => '1212')).toBe(0)
    expect(toInteger('0x111')).toBe(273)
    expect(toInteger('0b101')).toBe(5)
    const d = new Date()
    expect(toInteger(d)).toBe(+d)
    expect(toInteger(true)).toBe(1)
    expect(toInteger(false)).toBe(0)
    expect(toInteger(NaN)).toBe(0)
    expect(toInteger(-NaN)).toBe(0)
    expect(toInteger(Infinity)).toBe(Inf)
    expect(toInteger(-Infinity)).toBe(NegInf)
    expect(toInteger(undefined)).toBe(0)
    expect(toInteger(null)).toBe(0)
    expect(toInteger('')).toBe(0)
    expect(toInteger('    ')).toBe(0)
  })
})

import { toNumber } from '~/to'
import { symbol } from '../utils'
import { booleanToNumber, stringToNumber } from '~/to/toNumber'

describe('toNumber', () => {
  it('should be true', () => {
    expect(toNumber('1')).toBe(1)
    expect(toNumber(1)).toBe(1)
    expect(toNumber('001')).toBe(1)
    expect(toNumber('001.2')).toBe(1.2)
    expect(toNumber(1.2)).toBe(1.2)
    expect(toNumber(-1.2)).toBe(-1.2)
    expect(toNumber('-1.2')).toBe(-1.2)
    expect(toNumber('')).toBe(0)
    expect(toNumber('')).toBe(0)
    expect(toNumber(Infinity)).toBe(Infinity)
    expect(toNumber(Number.MAX_VALUE)).toBe(1.7976931348623157e308)
    expect(toNumber(Number.MAX_SAFE_INTEGER)).toBe(9007199254740991)
    expect(toNumber(new Function())).toBe(NaN)
    expect(toNumber('test')).toBe(NaN)
    expect(toNumber(NaN)).toBe(NaN)
    expect(toNumber(symbol)).toBe(NaN)
    expect(toNumber({})).toBe(NaN)
    expect(toNumber(() => {})).toBe(NaN)
    const d = new Date()
    expect(toNumber(d)).toBe(+d)
  })
})

describe('stringToNumber', () => {
  it('should be true', () => {
    expect(stringToNumber('1')).toBe(1)
    expect(stringToNumber('00111')).toBe(111)
    expect(stringToNumber('  0011  ')).toBe(11)
    expect(stringToNumber(' 0b111')).toBe(7)
    expect(stringToNumber('0o12')).toBe(10)
    expect(stringToNumber('0x')).toBe(NaN)
    expect(stringToNumber('0x111')).toBe(273)
    expect(stringToNumber('0x01')).toBe(1)
  })
})

describe('booleanToNumber', () => {
  it('should be true', () => {
    expect(booleanToNumber(true)).toBe(1)
    expect(booleanToNumber(false)).toBe(0)
  })
})

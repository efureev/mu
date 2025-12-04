import { isNumeric } from '~/is'

describe('isNumeric', () => {
  it('accepts numbers', () => {
    expect(isNumeric(0)).toBe(true)
    expect(isNumeric(123)).toBe(true)
    expect(isNumeric(-123.45)).toBe(true)
    // @ts-ignore
    expect(isNumeric(NaN)).toBe(false)
    // @ts-ignore
    expect(isNumeric(Infinity)).toBe(false)
  })

  it('accepts numeric strings', () => {
    expect(isNumeric('42')).toBe(true)
    expect(isNumeric(' 42 ')).toBe(true)
    expect(isNumeric('+3.14')).toBe(true)
    expect(isNumeric('-0.001')).toBe(true)
    expect(isNumeric('1e3')).toBe(true)
    expect(isNumeric('0x11')).toBe(true) // Number('0x11') === 17
  })

  it('rejects non-numeric strings and others', () => {
    expect(isNumeric('')).toBe(false)
    expect(isNumeric('   ')).toBe(false)
    expect(isNumeric('abc')).toBe(false)
    expect(isNumeric('1_000')).toBe(false)
    // @ts-ignore
    expect(isNumeric(undefined)).toBe(false)
    // @ts-ignore
    expect(isNumeric(null)).toBe(false)
    // @ts-ignore
    expect(isNumeric({})).toBe(false)
    // @ts-ignore
    expect(isNumeric([])).toBe(false)
  })
})

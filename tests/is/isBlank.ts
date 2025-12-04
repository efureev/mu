import { isBlank, isBlanks } from '~/is'

describe('isBlank', () => {
  it('returns true for empty or whitespace-only strings (actual whitespace)', () => {
    expect(isBlank('')).toBe(true)
    expect(isBlank('   ')).toBe(true)
    // Literal backslash sequences are not whitespace
    expect(isBlank('\\t')).toBe(false)
    expect(isBlank('\\n')).toBe(false)
    expect(isBlank('\\r')).toBe(false)

    // Actual whitespace characters should be blank
    expect(isBlank('\t')).toBe(true)
    expect(isBlank('\n')).toBe(true)
    expect(isBlank('\r')).toBe(true)
    expect(isBlank('\u00A0')).toBe(true)
  })

  it('returns false for non-strings or strings with non-whitespace', () => {
    expect(isBlank(' x ')).toBe(false)
    // @ts-ignore
    expect(isBlank(null)).toBe(false)
    // @ts-ignore
    expect(isBlank(undefined)).toBe(false)
    // @ts-ignore
    expect(isBlank(0)).toBe(false)
    // @ts-ignore
    expect(isBlank({})).toBe(false)
  })

  it('isBlanks: all must be blank', () => {
    expect(isBlanks('', '  ')).toBe(true)
    expect(isBlanks('', 'x')).toBe(false)
  })
})

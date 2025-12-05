import number, { numberRus } from '~/format/number'

describe('format/number edge cases', () => {
  it('NaN and Infinity handling', () => {
    // @ts-ignore
    expect(number(NaN)).toBe('NaN')
    // @ts-ignore
    expect(number(Infinity)).toBe('Infinity')
    // @ts-ignore
    expect(number(-Infinity)).toBe('-Infinity')
  })

  it('negative zero sign is preserved when decimals=0', () => {
    const negZero = -0
    expect(Object.is(negZero, -0)).toBe(true)
    expect(number(negZero, 0)).toBe('-0')
  })

  it('clearDecimals hides fraction only for integer values', () => {
    expect(number(1000, { decimals: 2, clearDecimals: true })).toBe('1,000')
    expect(number(1000.5, { decimals: 2, clearDecimals: true })).toBe('1,000.50')
  })

  it('custom separators via options object', () => {
    expect(number(1234567.89, { decimals: 2, decPoint: ',', thousandsSeparator: ' ' })).toBe('1 234 567,89')
  })

  it('positional args equal to options object', () => {
    const a = number(1234567.89, 3, '.', ' ', false)
    const b = number(1234567.89, { decimals: 3, decPoint: '.', thousandsSeparator: ' ', clearDecimals: false })
    expect(a).toBe(b)
  })

  it('numberRus helpers', () => {
    expect(numberRus(1234567)).toBe('1 234 567')
    expect(numberRus(1234567.5, 1)).toBe('1 234 567,5')
  })
})

import { number, numberRus } from '~/format'

describe('number', () => {
  it('should return string if parameter provided are integer', () => {
    expect(number(10000)).toBe('10,000.00')
    expect(number(1)).toBe('1.00')
    expect(number(10)).toBe('10.00')
    expect(number(100)).toBe('100.00')
    expect(number(1000)).toBe('1,000.00')
    expect(number(1001)).toBe('1,001.00')
  })

  it('should return string if parameter provided are strings', () => {
    expect(number('10000')).toBe('10,000.00')
    expect(number('1')).toBe('1.00')
    expect(number('10')).toBe('10.00')
    expect(number('100')).toBe('100.00')
    expect(number('1000')).toBe('1,000.00')
    expect(number('1001')).toBe('1,001.00')
  })

  it('should return string if parameter provided are float', () => {
    expect(number(10000.12)).toBe('10,000.12')
    expect(number(1.01)).toBe('1.01')
    expect(number(10.0)).toBe('10.00')
    expect(number(100.0)).toBe('100.00')
    expect(number(1000.0)).toBe('1,000.00')
    expect(number(1001.0001)).toBe('1,001.00')
  })

  it('should return string if parameter provided are mixed', () => {
    expect(number(10000, 3)).toBe('10,000.000')
    expect(number(1.234, 3, '-')).toBe('1-234')
    expect(number(10000.234, 3, ':', '|')).toBe('10|000:234')
    expect(number(10000.234, 3, ':', '|', true)).toBe('10|000:234')
    expect(number(10000, 3, ':', '|', true)).toBe('10|000')
  })
})

describe('numberRus', () => {
  it('should return string if parameter provided are mixed', () => {
    expect(numberRus('10000')).toBe('10 000')
    expect(numberRus(10000)).toBe('10 000')
    expect(numberRus(1)).toBe('1')
    expect(numberRus(10)).toBe('10')
    expect(numberRus(100)).toBe('100')
    expect(numberRus(1000)).toBe('1 000')
    expect(numberRus(1001)).toBe('1 001')
    expect(numberRus(1001.2)).toBe('1 001.20')
    expect(numberRus(1001.0)).toBe('1 001')
    expect(numberRus('1001.00')).toBe('1 001')
    expect(numberRus('1001.00', 3)).toBe('1 001')
    expect(numberRus('1001.01', 3)).toBe('1 001.010')
  })
})

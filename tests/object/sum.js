import sum from '../../src/object/sum'

describe('sum', () => {
  it('basic', () => {
    expect(sum({ a: 0, b: 0, c: 0 })).toEqual(0)
    expect(sum({ a: 0 })).toEqual(0)
    expect(sum({ a: null, b: 0, c: null })).toEqual(0)
    expect(sum({ a: null, b: 12, c: null })).toEqual(12)
    expect(sum({ a: 1, b: 12, c: 2 })).toEqual(15)
    expect(sum({ a: 1, b: -12, c: 2 })).toEqual(-9)
  })

  it('other', () => {
    expect(sum({ a: true, b: true, c: true })).toEqual(3)
    expect(sum({ a: true, b: true, c: false })).toEqual(2)
    expect(sum({ a: false, b: false, c: false })).toEqual(0)
  })
})

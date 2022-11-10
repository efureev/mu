import logicalAnd from '~/object/logicalAnd'

describe('logicalAnd', () => {
  it('true', () => {
    expect(logicalAnd({ a: true, b: true, c: true })).toEqual(true)
    expect(logicalAnd({ a: true })).toEqual(true)
    expect(logicalAnd({})).toEqual(true)
    expect(logicalAnd({})).toEqual(true)
  })

  it('false', () => {
    expect(logicalAnd({ a: false, b: false, c: false })).toEqual(false)
    expect(logicalAnd({ a: false, b: false, c: true })).toEqual(false)
    expect(logicalAnd({ a: true, b: false, c: true })).toEqual(false)
    expect(logicalAnd({ a: true, b: true, c: false })).toEqual(false)
    expect(logicalAnd({ a: false })).toEqual(false)
  })
})

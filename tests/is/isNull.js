import {isNil, isNils, isNull, isNulls} from './../../src/is'

describe('isNil', () => {

  it('should return `true`', () => {
    expect(isNil(null)).toBeTruthy()
    expect(isNil(undefined)).toBeTruthy()
    expect(isNil(void 0)).toBeTruthy()
    expect(isNil(void 2)).toBeTruthy()
  })

  it('should return `false`', () => {
    expect(!isNil(1)).toBeTruthy()
    expect(!isNil('212')).toBeTruthy()
    expect(!isNil(/x/)).toBeTruthy()
    expect(!isNil(() => {
    })).toBeTruthy()
    expect(!isNil(new Date())).toBeTruthy()
    expect(!isNil(new Error())).toBeTruthy()
  })
})


describe('isNils', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isNils()).toThrow()
  })

  it('should return `true`', () => {
    expect(isNils(null, null)).toBeTruthy()
    expect(isNils(undefined, null)).toBeTruthy()
    expect(isNils(void 0, null)).toBeTruthy()
    expect(isNils(void 2, null)).toBeTruthy()
  })

  it('should return `false`', () => {
    expect(!isNils(1, null)).toBeTruthy()
    expect(!isNils('212', null)).toBeTruthy()
    expect(!isNils(/x/, null)).toBeTruthy()
    expect(!isNils(null, () => {
    })).toBeTruthy()
    expect(!isNils(new Date(), null)).toBeTruthy()
    expect(!isNils(new Error(), null)).toBeTruthy()
  })
})

describe('isNull', () => {
  it('should return `true`', () => {
    expect(isNull(null)).toBeTruthy()
  })

  it('should return `true`', () => {
    expect(!isNull(undefined)).toBeTruthy()
    expect(!isNull(void 0)).toBeTruthy()
    expect(!isNull(void 2)).toBeTruthy()
    expect(!isNull(1)).toBeTruthy()
    expect(!isNull('212')).toBeTruthy()
    expect(!isNull(/x/)).toBeTruthy()
    expect(!isNull(() => {
    })).toBeTruthy()
    expect(!isNull(new Date())).toBeTruthy()
    expect(!isNull(new Error())).toBeTruthy()
  })

})


describe('isNulls', () => {
  it('should throw an error if no parameters are provided', () => {
    expect(() => isNulls()).toThrow()
  })

  it('should return `true`', () => {
    expect(isNulls(null, null)).toBeTruthy()
    expect(!isNulls(undefined, null)).toBeTruthy()
    expect(!isNulls(void 0, null)).toBeTruthy()
    expect(!isNulls(void 2, null)).toBeTruthy()
  })

  it('should return `false`', () => {
    expect(!isNulls(1, null)).toBeTruthy()
    expect(!isNulls('212', null)).toBeTruthy()
    expect(!isNulls(/x/, null)).toBeTruthy()
    expect(!isNulls(null, () => {
    })).toBeTruthy()
    expect(!isNulls(new Date(), null)).toBeTruthy()
    expect(!isNulls(new Error(), null)).toBeTruthy()
  })
})

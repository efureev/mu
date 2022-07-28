import { getSize } from './../../src/object'

describe('getSize', () => {
  it('should throw an error if no parameters are provided', () => {
    // @ts-ignore
    expect(() => getSize()).toThrow()
  })

  it('should return size of val if parameter provided are objects', () => {
    expect(getSize({ 1: 0, 2: 2, 3: 4 })).toBe(3)
    expect(getSize({ 1: 0, 2: 2, 3: 4 })).toBe(3)
    expect(getSize({ test: 0, te: 2 })).toBe(2)
    expect(getSize({ test: 0, te: 2 })).toBe(2)
  })

  test('should return size of val if parameter provided are not objects', () => {
    // expect(()=>{throw Error('Param is not object')}).toThrow()
    expect(() => {
      getSize(null)
    }).toThrow()
    expect(() => {
      getSize(undefined)
    }).toThrow()

    expect(() => {
      // @ts-ignore
      getSize('')
    }).toThrow()

    expect(() => {
      getSize([])
    }).toThrow()

    expect(() => {
      // @ts-ignore
      getSize(12)
    }).toThrow()
  })
})

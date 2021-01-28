import { toArray } from '../../src/to'

describe('toArray', () => {
  it('empty', () => {
    expect(toArray()).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(undefined)).toEqual([])
    expect(toArray('')).toEqual([])
    expect(toArray(Infinity)).toEqual([])
  })

  it('numbers', () => {
    expect(toArray(1)).toEqual([1])
    expect(toArray(123)).toEqual([123])
    expect(toArray(123.2)).toEqual([123.2])
    expect(toArray(0)).toEqual([0])
    expect(toArray(-0)).toEqual([-0])
    expect(toArray(-10)).toEqual([-10])
  })

  it('bool', () => {
    expect(toArray(true)).toEqual([true])
    expect(toArray(false)).toEqual([false])
  })

  it('string', () => {
    expect(toArray('1')).toEqual(['1'])
    expect(toArray('001')).toEqual(['0', '0', '1'])
    expect(toArray('test')).toEqual(['t', 'e', 's', 't'])
  })
})

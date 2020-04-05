import tap from '../../src/core/tap'

describe('tap', () => {

  it('basic', () => {
    expect(tap(12)).toEqual(12)
    expect(tap('tes')).toEqual('tes')
    expect(tap('test', (value) => value.toUpperCase())).toEqual('TEST')
  })

  it('advanced', () => {
    expect(tap([1, 2, 3], (value) => value.pop())).toEqual([1, 2])
    expect(tap({b: 2, a: 'test'}, (value) => delete value.a)).toEqual({b: 2})
  })

  it('function', () => {
    const fn = v => 100

    expect(tap(fn)).toEqual(100)
    expect(tap(fn, (value) => value / 2)).toEqual(50)
  })
})

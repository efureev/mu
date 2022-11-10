import defaults from '~/object/defaults'

describe('defaults', () => {
  it('basic', () => {
    expect(defaults({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 })
    expect(defaults({ a: 1 }, { b: 2 }, { a: 3 })).toEqual({ a: 1, b: 2 })
    expect(defaults({ a: 1 }, { b: 2 }, { a: 3, b: 3 })).toEqual({ a: 1, b: 2 })
    expect(defaults({ a: 1 }, { a: 3, b: 3 })).toEqual({ a: 1, b: 3 })
    expect(defaults({ a: 3, b: 3 })).toEqual({ a: 3, b: 3 })
    expect(defaults({ a: null }, { b: 2 }, { a: 3 })).toEqual({ a: null, b: 2 })
    expect(defaults({ a: undefined }, { b: 2 }, { a: 3 })).toEqual({ a: undefined, b: 2 })
    expect(defaults({ a: undefined }, {}, {})).toEqual({ a: undefined })
    // @ts-ignore
    expect(defaults({ a: 1 }, 'test', 3)).toEqual({ a: 1 })
  })

  it('deep', () => {
    expect(defaults({ a: { b: 2 } }, { a: { b: 1, c: 3 } })).toEqual({ a: { b: 2, c: 3 } })
    expect(defaults({ a: { b: undefined } }, { a: { b: 1, c: 3 } })).toEqual({ a: { b: undefined, c: 3 } })
    expect(defaults({ a: {} }, { a: { b: 1 } }, { a: { c: 3 } })).toEqual({ a: { b: 1, c: 3 } })
    expect(defaults({ a: {} }, { a: 3 })).toEqual({ a: {} })
    expect(defaults({ a: { a: { a: 1 } } }, { a: { a: { a: 2 } } }, { a: { a: { b: 4 } } })).toEqual({
      a: { a: { a: 1, b: 4 } },
    })
  })
})

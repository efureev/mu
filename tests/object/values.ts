import values from '~/object/values'

describe('values', () => {
  it('basic', () => {
    expect(values({ foo: 1, bar: 2 })).toEqual([1, 2])
    expect(values([1, 2])).toEqual([1, 2])
    expect(values([])).toEqual([])
    expect(values()).toEqual([])
  })

  it('function', () => {
    function Foo() {
      // @ts-ignore
      this.a = 1
      // @ts-ignore
      this.b = 2
    }

    Foo.prototype.c = 3

    // @ts-ignore
    expect(values(new Foo())).toEqual([1, 2])
  })

  it('string', () => {
    expect(values('test')).toEqual(['t', 'e', 's', 't'])
    expect(values('')).toEqual([])
  })
})

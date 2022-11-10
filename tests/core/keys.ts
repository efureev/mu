import keys from '~/core/keys'

describe('keys', () => {
  it('basic', () => {
    expect(keys('hi')).toEqual(['0', '1'])
    expect(keys(12)).toEqual([])
  })

  it('advanced', () => {
    function Foo() {
      // @ts-ignore
      this.a = 1
      // @ts-ignore
      this.b = 2
    }

    Foo.prototype.c = 3
    // @ts-ignore
    expect(keys(new Foo())).toEqual(['a', 'b'])
  })
})

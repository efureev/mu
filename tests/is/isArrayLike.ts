import isArrayLike from '~/is/isArrayLike'

describe('isArrayLike', () => {
  it('should return false', () => {
    function Foo() {
      // @ts-ignore
      this.a = 1
      // @ts-ignore
      this.b = 2
    }

    // @ts-ignore
    const list = [123, 0, null, undefined, {}, () => {}, new Date(), false, true, 12.4, new Foo()]

    list.forEach(value => {
      expect(isArrayLike(value)).toEqual(false)
    })
  })

  it('should return true', () => {
    const list = [[], [1, 2, 3], '', 'test', '123']

    list.forEach(value => {
      expect(isArrayLike(value)).toEqual(true)
    })
  })
})

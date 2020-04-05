import {values} from './../../src/object'

describe('values', () => {

  it('basic', () => {
    expect(values({foo: 1, bar: 2})).toEqual([1, 2])
    expect(values([1, 2])).toEqual([1, 2])
    expect(values([])).toEqual([])
    expect(values()).toEqual([])
  })

  it('function', () => {
    function Foo() {
      this.a = 1
      this.b = 2
    }

    Foo.prototype.c = 3

    expect(values(new Foo)).toEqual([1, 2])
  })

  it('string', () => {
    expect(values('test')).toEqual(['t', 'e', 's', 't'])
    expect(values('')).toEqual([])
  })
})

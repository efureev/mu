import { toQueryString } from '~/object'

describe('toQueryString', () => {
  it('should return string from objects', () => {
    expect(toQueryString({ foo: 1, bar: 2 })).toBe('foo=1&bar=2')
    expect(toQueryString({ foo: null, bar: 2 })).toBe('foo=&bar=2')
    expect(toQueryString({ 'some price': '$300' })).toBe('some%20price=%24300')
    expect(toQueryString({ date: new Date(2011, 0, 1) })).toBe('date=2011-01-01T00%3A00%3A00')
    expect(toQueryString({ colors: ['red', 'green', 'blue'] })).toBe('colors=red&colors=green&colors=blue')
  })

  it('should return string from deep objects', () => {
    expect(toQueryString({ fields: { title: 1, status: 1, integer: 1 } }, true)).toBe(
      'fields%5Btitle%5D=1&fields%5Bstatus%5D=1&fields%5Binteger%5D=1'
    )
    expect(toQueryString({ fields: { title: true, status: true, integer: false } }, true)).toBe(
      'fields%5Btitle%5D=1&fields%5Bstatus%5D=1&fields%5Binteger%5D=0'
    )
  })
})

import {toQueryString} from './../../src/object'

describe('toQueryString', () => {

  it('should return array of objects', () => {
    expect(toQueryString({foo: 1, bar: 2})).toBe('foo=1&bar=2')
    expect(toQueryString({foo: null, bar: 2})).toBe('foo=&bar=2')
    expect(toQueryString({'some price': '$300'})).toBe('some%20price=%24300')
    expect(toQueryString({date: new Date(2011, 0, 1)}))
      .toBe('date=2011-01-01T00%3A00%3A00')
    expect(toQueryString({colors: ['red', 'green', 'blue']}))
      .toBe('colors=red&colors=green&colors=blue')
  })
})

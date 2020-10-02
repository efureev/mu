import { fromQueryString } from './../../src/object'

describe('fromQueryString', () => {
  it('should return empty object from empty', () => {
    expect(fromQueryString('')).toMatchObject({})
    expect(fromQueryString(null)).toMatchObject({})
    expect(fromQueryString(undefined)).toMatchObject({})
    // expect(fromQueryString(null)).toMatchObject({})
  })

  it('should return object from string', () => {
    expect(fromQueryString('foo=1&bar=2')).toMatchObject({ foo: '1', bar: '2' })
    expect(fromQueryString('foo=&bar=2')).toMatchObject({ foo: '', bar: '2' })
    expect(fromQueryString('foo=&bar=&bar2=')).toMatchObject({ foo: '', bar: '', bar2: '' })
    expect(fromQueryString('foo=&bar=&=sa')).toMatchObject({ foo: '' })
    expect(fromQueryString('some%20price=%24300')).toMatchObject({ 'some price': '$300' })
    expect(fromQueryString('colors=red&colors=green&colors=blue')).toMatchObject({ colors: ['red', 'green', 'blue'] })
  })

  it('should return object from deep string', () => {
    expect(fromQueryString('fields[title]=1&fields[status]=1&fields[integer]=1', true)).toMatchObject({
      fields: {
        title: '1',
        status: '1',
        integer: '1',
      },
    })
    expect(fromQueryString('fields%5Btitle%5D=1&fields%5Bstatus%5D=1&fields%5Binteger%5D=1', true)).toMatchObject({
      fields: {
        title: '1',
        status: '1',
        integer: '1',
      },
    })
  })

  it('should return deep object from string', () => {
    expect(
      fromQueryString(
        'username=Jacky&' +
          'dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&' +
          'hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&' +
          'hobbies[3][0]=nested&hobbies[3][1]=stuff',
        true
      )
    ).toMatchObject({
      username: 'Jacky',
      dateOfBirth: {
        day: '1',
        month: '2',
        year: '1911',
      },
      hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']],
    })
  })
})

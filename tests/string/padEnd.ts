import { padEnd } from '../../src/string'

describe('padStart', () => {
  it('basic', () => {
    expect(padEnd('hi', 5)).toEqual('hi   ')
    expect(padEnd(123, 6, '0')).toEqual('123000')
    expect(padEnd('option ', 10, '-')).toEqual('option ---')
  })

  it('nil', () => {
    expect(padEnd(null, 5)).toEqual('')
    expect(padEnd(undefined, 0)).toEqual('')
    expect(padEnd('', -10)).toEqual('')
  })

  it('string > length', () => {
    expect(padEnd('hi', 1)).toEqual('hi')
    expect(padEnd('hello2 word', 0)).toEqual('hello2 word')
    expect(padEnd('hello word', 7)).toEqual('hello word')
  })
})

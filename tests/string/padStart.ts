import { padStart } from '~/string'

describe('padStart', () => {
  it('basic', () => {
    expect(padStart('hi', 5)).toEqual('   hi')
    expect(padStart(123, 6, '0')).toEqual('000123')
    expect(padStart(' option', 10, '-')).toEqual('--- option')
  })

  it('nil', () => {
    expect(padStart(null, 5)).toEqual('')
    expect(padStart(undefined, 0)).toEqual('')
    expect(padStart('', -10)).toEqual('')
  })

  it('string > length', () => {
    expect(padStart('hi', 1)).toEqual('hi')
    expect(padStart('hello2 word', 0)).toEqual('hello2 word')
    expect(padStart('hello word', 7)).toEqual('hello word')
  })
})

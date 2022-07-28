import { flip } from '../../src/object'

describe('flip', () => {
  it('basic', () => {
    expect(flip({ a: 1, b: '2', c: 3 })).toEqual({ 1: 'a', 2: 'b', 3: 'c' })
    expect(flip({ a: 'test', key: 'value' })).toEqual({ test: 'a', value: 'key' })
    expect(
      flip({
        date: () => {},
        key: 'value',
      })
    ).toEqual({ 'function date() {}': 'date', value: 'key' })
  })
})

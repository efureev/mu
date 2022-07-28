import { endsWith } from './../../src/string'

describe('endsWith', () => {
  it('', () => {
    const string = 'abc'
    expect(endsWith(string, 'c')).toBeTruthy()
    expect(endsWith(string, 'bc')).toBeTruthy()
    expect(endsWith(string, 'abc')).toBeTruthy()
    expect(endsWith(string, '')).toBeTruthy()
    expect(endsWith('', '')).toBeTruthy()
    expect(endsWith('', 'as')).toBeFalsy()
    expect(endsWith(string, 'b')).toBeFalsy()
    expect(endsWith(string, 'a')).toBeFalsy()
    expect(endsWith(string, 'ab')).toBeFalsy()
  })
})

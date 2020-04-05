import {toString} from '../../src/to'
import {emojiVar, realm, symbol} from '../utils'

describe('toString', () => {

  it('should return string if parameter provided are numbers', () => {
    expect(toString(1)).toBe('1')
    expect(toString(0)).toBe('0')
    expect(toString(-0)).toBe('0')
    expect(toString(1212)).toBe('1212')
    expect(toString(-1212)).toBe('-1212')
    expect(toString(12.54)).toBe('12.54')
  })

  it('should return string if parameter provided are string', () => {
    expect(toString('test')).toBe('test')
    expect(toString('')).toBe('')
    expect(toString('   test  ')).toBe('test')
    expect(toString('\ttest\n')).toBe('test')
  })

  it('should return string if parameter provided are object', () => {
    expect(toString({})).toBe('{}')
    expect(toString({key: 'value'})).toBe('{"key":"value"}')
    expect(toString({key: 'value', dig: 12})).toBe('{"key":"value","dig":12}')
  })

  it('should return string if parameter provided are array', () => {
    expect(toString([])).toBe('')
    expect(toString([1, 2, 3, 4, 5])).toBe('1,2,3,4,5')
  })
  it('should return string if parameter provided are mixed', () => {
    expect(toString()).toBe('')
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
    expect(toString(true)).toBe('true')
    expect(toString(false)).toBe('false')
  })

  it('other', () => {
    expect(toString(symbol)).toBe('Symbol(a)')
    expect(toString(NaN)).toBe('NaN')
    expect(toString(realm)).toBe('{}')
    expect(toString(emojiVar)).toBe(emojiVar)
    expect(toString()).toBe('')
    expect(toString('😈')).toBe('😈')
  })
})

import isArguments from './../../src/is/isArguments'
import {args, falsey, realm, slice, strictArgs, symbol} from './../utils'

describe('isArguments', () => {

  it('should return `true` for `arguments` objects', function () {
    expect(isArguments(args)).toBe(true)
    expect(isArguments(strictArgs)).toBe(true)
  })


  it('should return `false` for non `arguments` objects', function () {

    const actual = falsey.map(function (value, index) {
      return index ? isArguments(value) : isArguments()
    })

    actual.map((item) => {
      expect(isArguments(item)).toBe(false)
    })

    expect(isArguments(actual)).toBe(false)
    expect(isArguments([1, 2, 3])).toBe(false)
    expect(isArguments(true)).toBe(false)
    expect(isArguments(false)).toBe(false)
    expect(isArguments(new Date)).toBe(false)
    expect(isArguments(new Error)).toBe(false)
    expect(isArguments({da: 'tex'})).toBe(false)
    expect(isArguments(1)).toBe(false)
    expect(isArguments(/x/)).toBe(false)
    expect(isArguments('a')).toBe(false)
    expect(isArguments(slice)).toBe(false)
    expect(isArguments(symbol)).toBe(false)
  })

  it('should work with an `arguments` object from another realm', function () {
    if (realm.arguments) {
      expect(isArguments(realm.arguments)).toBe(true)
    }
  })


})

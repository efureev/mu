import root from '~/internal/root'
import { isSymbol } from '~/is'

describe('isSymbol', () => {
  it('should return `true` for symbols', () => {
    if (root.Symbol) {
      expect(isSymbol(Symbol())).toBeTruthy()
      expect(isSymbol(Symbol('a'))).toBeTruthy()
      expect(isSymbol(new Object(Symbol('a')))).toBeTruthy()
    }
  })

  it('should return `false` for symbols', () => {
    if (root.Symbol) {
      expect(isSymbol([])).toBeFalsy()
      expect(isSymbol([1, 3])).toBeFalsy()
      expect(isSymbol({})).toBeFalsy()
      expect(isSymbol({ k: 1 })).toBeFalsy()
      expect(isSymbol(null)).toBeFalsy()
      expect(isSymbol(undefined)).toBeFalsy()
      expect(isSymbol(1)).toBeFalsy()
      expect(isSymbol(-21)).toBeFalsy()
      expect(isSymbol('')).toBeFalsy()
      expect(isSymbol('dasda')).toBeFalsy()
      expect(isSymbol(/x/)).toBeFalsy()
      expect(isSymbol(new Function())).toBeFalsy()
      expect(isSymbol(new Date())).toBeFalsy()
      expect(isSymbol(new Error())).toBeFalsy()
      expect(isSymbol(true)).toBeFalsy()
      expect(isSymbol(false)).toBeFalsy()
    }
  })
})

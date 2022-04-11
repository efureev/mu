import isBoolean from './isBoolean.js'
import isNil from './isNil.js'
import isNumeric from './isNumeric.js'
import isString from './isString.js'
import isSymbol from './isSymbol.js'

/**
 * Возвращает TRUE, если тип `value` передается копированием по значению
 *
 * @memberOf µ.is
 * @author efureev
 * @param {*} value
 */
export default function isBasicType(value) {
  return !isAdvancedType(value)
}

export function isAdvancedType(value) {
  return !isNil(value) && (isSymbol(value) || (!isString(value) && !isNumeric(value) && !isBoolean(value)))
}

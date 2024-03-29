import isBoolean from './isBoolean'
import isNil from './isNil'
import isNumeric from './isNumeric'
import isString from './isString'
import isSymbol from './isSymbol'

export default function isBasicType(value: any): boolean {
  return !isAdvancedType(value)
}

export function isAdvancedType(value: any): boolean {
  return !isNil(value) && (isSymbol(value) || (!isString(value) && !isNumeric(value) && !isBoolean(value)))
}

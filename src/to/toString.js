import isArray from '../is/isArray.js'
import isSymbol from '../is/isSymbol.js'
import { reTrim } from '../core/vars.js'

const symbolProto = Symbol ? Symbol.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 *
 * @memberof µ
 * @author efureev
 *
 * @param {*} value
 * @returns {string}
 */
export default function toString(value) {
  if (isArray(value)) {
    return value.toString()
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : ''
  }

  switch (typeof value) {
    case 'string':
      return value.replace(reTrim, '')
    case 'number':
      return value.toString()
    case 'object':
      return value === null ? '' : JSON.stringify(value)
    case 'boolean':
      return value.toString()
  }

  if (!value) {
    return ''
  }

  const result = value + ''

  return result === '0' && 1 / value === -Infinity ? '-0' : result
}

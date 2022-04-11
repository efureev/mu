import equalsObject from './../object/equals.js'
import equalsArray from './../array/equals.js'
import isArray from '../is/isArray.js'
import isBoolean from '../is/isBoolean.js'
import isNumeric from '../is/isNumeric.js'
import isFunction from '../is/isFunction.js'
import isObject from '../is/isObject.js'
import isString from '../is/isString.js'

/**
 * @param {*} first
 * @param {*} second
 * @returns {string|boolean}
 */
export default function equals(first, second) {
  if (first === second) {
    return true
  }

  if (isString(first) || isNumeric(first) || isBoolean(first)) {
    return first === second
  }

  if (isArray(first) && isArray(second)) {
    return equalsArray(first, second)
  }

  if (isObject(first) && isObject(second)) {
    return equalsObject(first, second)
  }

  if (typeof first === 'object') {
    if (
      (first instanceof Date && second instanceof Date) ||
      (first instanceof RegExp && second instanceof RegExp) ||
      (first instanceof String && second instanceof String) ||
      (first instanceof Number && second instanceof Number)
    ) {
      return first.toString() === second.toString()
    }
  }

  if (isFunction(first) && isFunction(second)) {
    return ('' + first).valueOf() === ('' + second).valueOf()
  }

  return false
}

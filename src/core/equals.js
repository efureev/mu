import equalsObject from './../object/equals'
import equalsArray from './../array/equals'
import isArray from '../is/isArray'
import isBoolean from '../is/isBoolean'
import isNumeric from '../is/isNumeric'
import isFunction from '../is/isFunction'
import isObject from '../is/isObject'
import isString from '../is/isString'

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

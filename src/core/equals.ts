import objectsEqual from './../object/equals'
import arraysEquals from './../array/equals'
import isObject from '../is/isObject'
import isString from '../is/isString'
import isBoolean from '../is/isBoolean'
import isNumeric from '../is/isNumeric'
import isFunction from '../is/isFunction'

/**
 * @param {*} first
 * @param {*} second
 * @returns {boolean}
 */
export default function equals(first: any, second: any): boolean {
  if (first === second) {
    return true
  }

  if (isString(first) || isNumeric(first) || isBoolean(first)) {
    return first === second
  }

  if ((first instanceof Date && second instanceof Date) || (first instanceof RegExp && second instanceof RegExp)) {
    return first.toString() === second.toString()
  }

  if (Array.isArray(first) && Array.isArray(second)) {
    return arraysEquals(first, second)
  }

  if (isObject(first) && isObject(second)) {
    return objectsEqual(first, second)
  }

  if (isFunction(first) && isFunction(second)) {
    return ('' + first).valueOf() === ('' + second).valueOf()
  }

  return false
}

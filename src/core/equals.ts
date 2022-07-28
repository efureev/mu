import { objectsEqual } from './../object'
import { arraysEquals } from './../array'
import { isArray, isObject, isString, isBoolean, isNumeric, isFunction, isDate } from '../is'

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

  if (isArray(first) && isArray(second)) {
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

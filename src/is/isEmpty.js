'use strict'

import { isEmptyObject } from './isObject'

/**
 * This function evaluates if all the parameters are empty
 *
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export default function isEmpty(...parameters) {
  const invalid = parameters.some((parameter) => {
    switch (Object.prototype.toString.call(parameter)) {
      case '[object String]':
        if (parameter.trim().length) return true
        break
      case '[object Number]':
        if (parameter !== 0) return true
        break
      case '[object Date]':
        return true
      case '[object Array]':
        return parameter.length !== 0
      case '[object Boolean]':
        return parameter === false
      case '[object Object]':
        return !isEmptyObject(parameter)
      // case '[object Function]':
      // case '[object AsyncFunction]':
      // case '[object Undefined]':
      // case '[object Null]':
    }
    return false
  })

  return !invalid
}

import isObject, { isEmptyObject, isObjectLike } from './isObject'
import isArray from './isArray'
import isEmpty from './isEmpty'
import isEven from './isEven'
import isFunction from './isFunction'
import isInteger from './isInteger'
import isSymbol from './isSymbol'
import isLength from './isLength'
import isArrayLike from './isArrayLike'
import isBasicType from './isBasicType'
import isBuffer from './isBuffer'
import isArguments from './isArguments'
import isNil, { isNils, isNull, isNulls } from './isNil'

/**
 * This function evaluates if all the parameters are strings
 *
 * @memberof µ.is
 * @author efureev
 * {...*} params - One or more parameters.
 */
export function isString(...parameters) {
  const invalid = parameters.some((parameter) => {
    return typeof parameter !== 'string'
  })

  return !invalid
}

/**
 * This function evaluates if all the parameters are Numeric
 *
 * @memberof mu
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export function isNumeric(...parameters) {
  const invalid = parameters.some((parameter) => {
    return isArray(parameter) || isNaN(parseFloat(parameter)) || !isFinite(parameter)
  })

  return !invalid
}

/**
 * This function evaluates if all the parameters are boolean
 *
 * @memberof mu
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export function isBoolean(...parameters) {
  const invalid = parameters.some((parameter) => {
    return !(
      parameter === true ||
      parameter === false ||
      Object.prototype.toString.call(parameter) === '[object Boolean]'
    )
  })

  return !invalid
}

/**
 * This function evaluates if all the parameters are dates
 *
 * @memberof mu
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export function isDate(...parameters) {
  const invalid = parameters.some((parameter) => {
    return Object.prototype.toString.call(parameter) !== '[object Date]'
  })

  return !invalid
}

export {
  isObject,
  isObjectLike,
  isArray,
  isEmpty,
  isEven,
  isFunction,
  isInteger,
  isSymbol,
  isNil,
  isNull,
  isNulls,
  isNils,
  isEmptyObject,
  isLength,
  isArrayLike,
  isBasicType,
  isBuffer,
  isArguments,
}

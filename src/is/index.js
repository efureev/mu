'use strict'

import isObject, {isEmptyObject, isObjectLike} from './isObject'
import isArray from './isArray'
import isEmpty from './isEmpty'
import isEven from './isEven'
import isFunction from './isFunction'
import isInteger from './isInteger'
import isSymbol from './isSymbol'

/**
 * This function evaluates if all the parameters are strings
 *
 * @memberof µ.is
 * @author efureev
 * {...*} params - One or more parameters.
 */
export function isString(...params) {
    const invalid = params.some((param) => {
        return typeof param !== 'string'
    })

    return !invalid

}

/**
 * This function evaluates if all the parameters are Numeric
 *
 * @memberof mu
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isNumeric(...params) {
    const invalid = params.some((param) => {
        return isNaN(parseFloat(param)) || !isFinite(param)
    })

    return !invalid
}

/**
 * This function evaluates if all the parameters are boolean
 *
 * @memberof mu
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isBoolean(...params) {
    const invalid = params.some((param) => {
        return !(param === true || param === false || Object.prototype.toString.call(param) === '[object Boolean]')
    })

    return !invalid
}

/**
 * This function evaluates if all the parameters are dates
 *
 * @memberof mu
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isDate(...params) {
    const invalid = params.some((param) => {
        return Object.prototype.toString.call(param) !== '[object Date]'
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
    isEmptyObject,
}

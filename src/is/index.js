'use strict'

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



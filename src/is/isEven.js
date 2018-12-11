'use strict'

/**
 * This function evaluates whether all parameters are even
 * @memberof µ.is
 * @author scottwestover
 * @param {...*} params - One or more parameters.
 */
export function isEven(...params) {
    for (const param of params) {
        // Only accept finite numbers
        if (Number.isNaN(parseFloat(param)) || !Number.isFinite(Number(param))) return false
        // Only accept evens
        else if (param % 2 !== 0) return false
    }
    return true
}

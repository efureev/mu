'use strict'

/**
 * This function evaluates whether all parameters are integers
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export default function isInteger(...params) {
    if (params.length === 0) throw Error('Please provide at least one number to evaluate isInteger.')
    if (params.some(param => Number.isNaN(Number.parseFloat(param)))) throw Error('Please provide all numbers to evaluate isInteger.')

    return !(params.some(param => !Number.isInteger(Number.parseFloat(param))))
}

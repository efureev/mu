'use strict'

/**
 * This function evaluates whether all parameters are array
 *
 * @param {...*} params - One or more parameters.
 */
export default function isArray(...params) {
    if (params.length === 0) throw Error('Please provide at least one param to evaluate isArray.')

    return !(params.some(param => !Array.isArray(param)))
}

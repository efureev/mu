'use strict'

/**
 * This function evaluates whether all parameters are null
 *
 * @param {...*} params - One or more parameters.
 */
export function isNulls(...params) {
    if (params.length === 0) throw Error('Please provide at least one param to evaluate isNull.')

    return !(params.some(param => !isNull(param)))
}


export function isNils(...params) {
    if (params.length === 0) throw Error('Please provide at least one param to evaluate isNull.')

    return !(params.some(param => !isNil(param)))
}

export default function isNil(val) {
    return val == null
}

export function isNull(val) {
    return val === null
}

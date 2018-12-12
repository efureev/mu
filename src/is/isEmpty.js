'use strict'

/**
 * This function evaluates if all the parameters are empty
 *
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isEmpty(...params) {
    const invalid = params.some((param) => {
        switch (typeof param) {
        case 'string':
            if (param.trim().length) return true
            break
        case 'number':
            if (param !== 0) return true
            break
        case 'object':
            if (param !== null && Object.keys(param).length) return true
            break
        case 'boolean':
            if (param) return true
            break
        }
        return false
    })

    return !invalid
}

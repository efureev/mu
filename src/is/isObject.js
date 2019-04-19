/**
 * This function evaluates whether all parameters are objects
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isObject(...params) {
    if (params.length === 0) throw Error('Please provide at least one number to evaluate isObject.')

    const invalid = params.some((param) => {
        const type = typeof param
        return param !== null && (type === 'object' || type === 'function')
    })

    return !invalid
}

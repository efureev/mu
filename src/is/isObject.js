const isO = (toString.call(null) === '[object Object]')
    ? function (value) {
        // check ownerDocument here as well to exclude DOM nodes
        return value != null && toString.call(value) === '[object Object]' &&
            value.ownerDocument === undefined
    }
    : function (value) {
        return toString.call(value) === '[object Object]'
    }

/**
 * This function evaluates whether all parameters are objects
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export function isObject(...params) {
    if (params.length === 0) throw Error('Please provide at least one number to evaluate isObject.')

    const invalid = params.some((param) => !isO(param))

    return !invalid
}

export function isEmptyObject(...params) {
    if (params.length === 0) throw Error('Please provide at least one number to evaluate isObject.')

    const invalid = params.some((param) => {
        if (!isObject(param))
            return true

        for (const key in param) return true
    })

    return !invalid
}

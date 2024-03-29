const isO =
  Object.prototype.toString.call(null) === '[object Object]'
    ? function (value: any): boolean {
        // check ownerDocument here as well to exclude DOM nodes
        return (
          value != null &&
          Object.prototype.toString.call(value) === '[object Object]' &&
          value.ownerDocument === undefined
        )
      }
    : function (value: any): boolean {
        return Object.prototype.toString.call(value) === '[object Object]'
      }

/**
 * This function evaluates whether all parameters are objects
 */
export function isObjects(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isObject.')
  }

  const invalid = parameters.some(parameter => !isO(parameter))

  return !invalid
}

export default function isObject(value?: any): boolean {
  return isO(value)
}

export function isEmptyObject(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isObject.')
  }

  const invalid = parameters.some(parameter => {
    if (!isObject(parameter)) return true

    for (const key in parameter) return true
  })

  return !invalid
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @example
 *
 * isObjectLike({}); // => true
 *
 * isObjectLike([]); // => true
 *
 * isObjectLike([1, 2, 3]); // => true
 *
 * isObjectLike(new Function()); // => false
 *
 * isObjectLike(null); // => false
 */
export function isObjectLike(value: any): boolean {
  return value !== null && typeof value === 'object'
}

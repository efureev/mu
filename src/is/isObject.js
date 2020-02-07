const isO =
  toString.call(null) === '[object Object]'
    ? function(value) {
        // check ownerDocument here as well to exclude DOM nodes
        return value != null && toString.call(value) === '[object Object]' && value.ownerDocument === undefined
      }
    : function(value) {
        return toString.call(value) === '[object Object]'
      }

/**
 * This function evaluates whether all parameters are objects
 * @memberof µ.is
 * @author efureev
 * @param {...*} params - One or more parameters.
 */
export default function isObject(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isObject.')

  const invalid = parameters.some((parameter) => !isO(parameter))

  return !invalid
}

export function isEmptyObject(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isObject.')

  const invalid = parameters.some((parameter) => {
    if (!isObject(parameter)) return true

    for (const key in parameter) return true
  })

  return !invalid
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
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
export function isObjectLike(value) {
  return value !== null && typeof value === 'object'
}

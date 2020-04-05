/**
 * Creates a base function for methods like `forIn` and `forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {function({Object}, {Function}, {Function}): *}
 */
export default function createBaseFor(fromRight = false) {
  return function (object, iteratee, keysFunc) {
    let index = -1,
      iterable = new Object(object),
      properties = keysFunc(object),
      length = properties.length,
      key

    while (length--) {
      key = properties[fromRight ? length : ++index]
      if (iteratee(iterable[key], key, iterable) === false) {
        break
      }
    }
    return object
  }
}

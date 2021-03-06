import isArrayLike from '../is/isArrayLike'

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
export default function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee)
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = new Object(collection)

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break
      }
    }
    return collection
  }
}

import isArray from '../is/isArray.js'
import isObject from '../is/isObject.js'
import equalsObject from '../object/equals.js'

/**
 * Deep comparing the contents of 2 arrays using strict equality
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {Boolean} `true` if the arrays are equal.
 */
export default function equals(array1, array2) {
  const length1 = array1.length
  const length2 = array2.length
  let i

  // Short circuit if the same array is passed twice
  if (array1 === array2) {
    return true
  }

  if (length1 !== length2) {
    return false
  }

  for (i = 0; i < length1; ++i) {
    if (array1[i] && array2[i]) {
      if (isArray(array1[i]) && isArray(array2[i])) {
        if (!equals(array1[i], array2[i])) {
          return false
        }
        continue
      }

      if (isObject(array1[i]) && isObject(array2[i])) {
        if (!equalsObject(array1[i], array2[i])) {
          return false
        }
        continue
      }
    }

    if (array1[i] !== array2[i]) {
      return false
    }
  }

  return true
}

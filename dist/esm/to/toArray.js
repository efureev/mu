import isArrayLike from '../is/isArrayLike';
import isBoolean from '../is/isBoolean';
import isNumeric from '../is/isNumeric';
import isNil from '../is/isNil';
import isString from '../is/isString';
import copyArray from '../internal/copyArray';
import stringToArray from '../string/stringToArray';
import values from '../object/values';
/** Built-in value references. */

const symIterator = Symbol ? Symbol.iterator : undefined;
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */

function iteratorToArray(iterator) {
  let data;
  const result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }

  return result;
}
/**
 * Converts `value` to an array.
 *
 * @memberof µ
 * @author efureev
 *
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 *
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * toArray(1);
 * // => []
 *
 * toArray(null);
 * // => []
 */


export default function toArray(value = []) {
  if (isNil(value)) {
    return [];
  }

  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }

  if (isNumeric(value) || isBoolean(value)) {
    return [value];
  }

  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }

  return values(value);
}
//# sourceMappingURL=toArray.js.map
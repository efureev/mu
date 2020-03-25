/** Used for built-in method references. */
import { isObjectLike } from '.'
import baseGetTag from '../internal/base/baseGetTag'

const objectProto = Object.prototype

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable

/** `Object#toString` result references. */
const argumentsTag = '[object Arguments]'

/**
 * The base implementation of `isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
const baseIsArguments = (value) => {
  return value !== null && typeof value === 'object' && baseGetTag(value) === argumentsTag
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * isArguments(function() { return arguments; }());
 * // => true
 *
 * isArguments([1, 2, 3]);
 * // => false
 */
export default baseIsArguments(
  (function () {
    return arguments
  })()
)
  ? baseIsArguments
  : function (value) {
      return (
        value !== null &&
        typeof value === 'object' &&
        hasOwnProperty.call(value, 'callee') &&
        !propertyIsEnumerable.call(value, 'callee')
      )
    }

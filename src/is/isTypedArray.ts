import node from '~/internal/node'
import baseIsTypedArray from '~/internal/base/baseIsTypedArray'

const nodeIsTypedArray = node && node.isTypedArray

/**
 * Checks if `value` is classified as a typed array.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array);
 * // => true
 *
 * isTypedArray([]);
 * // => false
 */
export default nodeIsTypedArray ? (value: any) => nodeIsTypedArray(value) : baseIsTypedArray

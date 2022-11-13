import root from '~/internal/root'
import getRawTag from '~/internal/getRawTag'

export type TagType =
  | '[object ArrayBuffer]'
  | '[object DataView]'
  | '[object Float32Array]'
  | '[object Float64Array]'
  | '[object Int8Array]'
  | '[object Int16Array]'
  | '[object Int32Array]'
  | '[object Uint8Array]'
  | '[object Uint8ClampedArray]'
  | '[object Uint16Array]'
  | '[object Uint32Array]'
  | '[object Arguments]'
  | '[object Array]'
  | '[object Boolean]'
  | '[object Date]'
  | '[object Error]'
  | '[object Function]'
  | '[object Map]'
  | '[object Number]'
  | '[object Object]'
  | '[object RegExp]'
  | '[object Set]'
  | '[object String]'
  | '[object WeakMap]'

type TagTypeNullable = TagType | '[object Null]' | '[object Undefined]'

const nullTag = '[object Null]'
const undefinedTag = '[object Undefined]'
const symToStringTag = root.Symbol ? root.Symbol.toStringTag : undefined

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {TagTypeNullable|string} Returns the `toStringTag`.
 */
export default function baseGetTag(value: any): TagTypeNullable | string {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag
  }

  return symToStringTag && symToStringTag in new Object(value)
    ? getRawTag(value)
    : Object.prototype.toString.call(value)
}

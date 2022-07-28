import root from '../root';
import getRawTag from '../getRawTag';
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';
const symToStringTag = root.Symbol ? root.Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {TagTypeNullable|string} Returns the `toStringTag`.
 */

export default function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in new Object(value) ? getRawTag(value) : Object.prototype.toString.call(value);
}
//# sourceMappingURL=baseGetTag.js.map
import isArguments from '../is/isArguments';
import isBuffer from '../is/isBuffer';
import isTypedArray from '../is/isTypedArray';
import times from '../utils/times';
import isIndex from './isIndex';
/** Used for built-in method references. */
const objectProto = Object.prototype;
/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array|[]} Returns the array of property names.
 */
export default function arrayLikeKeys(value, inherited = false) {
    const isArray_ = Array.isArray(value), isArgument = !isArray_ && isArguments(value), isBuff = !isArray_ && !isArgument && isBuffer(value), isType = !isArray_ && !isArgument && !isBuff && isTypedArray(value), skipIndexes = isArray_ || isArgument || isBuff || isType, result = skipIndexes ? times(value.length, String) : [], length = result.length;
    for (const key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes &&
                // Safari 9 has enumerable `arguments.length` in strict mode.
                (key === 'length' ||
                    // Node.js 0.10 has enumerable non-index properties on buffers.
                    (isBuff && (key === 'offset' || key === 'parent')) ||
                    // PhantomJS 2 has enumerable non-index properties on typed arrays.
                    (isType && (key === 'buffer' || key === 'byteLength' || key === 'byteOffset')) ||
                    // Skip index properties.
                    isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
//# sourceMappingURL=arrayLikeKeys.js.map
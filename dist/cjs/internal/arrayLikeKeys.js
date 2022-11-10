"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isArguments_1 = __importDefault(require("../is/isArguments"));
const isBuffer_1 = __importDefault(require("../is/isBuffer"));
const isTypedArray_1 = __importDefault(require("../is/isTypedArray"));
const times_1 = __importDefault(require("../utils/times"));
const isIndex_1 = __importDefault(require("./isIndex"));
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
function arrayLikeKeys(value, inherited = false) {
    const isArray_ = Array.isArray(value), isArgument = !isArray_ && (0, isArguments_1.default)(value), isBuff = !isArray_ && !isArgument && (0, isBuffer_1.default)(value), isType = !isArray_ && !isArgument && !isBuff && (0, isTypedArray_1.default)(value), skipIndexes = isArray_ || isArgument || isBuff || isType, result = skipIndexes ? (0, times_1.default)(value.length, String) : [], length = result.length;
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
                    (0, isIndex_1.default)(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
exports.default = arrayLikeKeys;
//# sourceMappingURL=arrayLikeKeys.js.map
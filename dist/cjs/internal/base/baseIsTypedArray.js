"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = baseIsTypedArray;
/** `Object#toString` result references. */
const isObject_1 = require("../../is/isObject");
const isLength_1 = __importDefault(require("../../is/isLength"));
const baseGetTag_1 = __importDefault(require("./baseGetTag"));
const argumentsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
const arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */
const typedArrayTags = {};
typedArrayTags[float32Tag] =
    typedArrayTags[float64Tag] =
        typedArrayTags[int8Tag] =
            typedArrayTags[int16Tag] =
                typedArrayTags[int32Tag] =
                    typedArrayTags[uint8Tag] =
                        typedArrayTags[uint8ClampedTag] =
                            typedArrayTags[uint16Tag] =
                                typedArrayTags[uint32Tag] =
                                    true;
typedArrayTags[argumentsTag] =
    typedArrayTags[arrayTag] =
        typedArrayTags[arrayBufferTag] =
            typedArrayTags[boolTag] =
                typedArrayTags[dataViewTag] =
                    typedArrayTags[dateTag] =
                        typedArrayTags[errorTag] =
                            typedArrayTags[funcTag] =
                                typedArrayTags[mapTag] =
                                    typedArrayTags[numberTag] =
                                        typedArrayTags[objectTag] =
                                            typedArrayTags[regexpTag] =
                                                typedArrayTags[setTag] =
                                                    typedArrayTags[stringTag] =
                                                        typedArrayTags[weakMapTag] =
                                                            false;
/**
 * The base implementation of `isTypedArray` without Node.js optimizations.
 *
 * @private
 */
function baseIsTypedArray(value) {
    return (0, isObject_1.isObjectLike)(value) && (0, isLength_1.default)(value.length) && typedArrayTags[(0, baseGetTag_1.default)(value)];
}
//# sourceMappingURL=baseIsTypedArray.js.map
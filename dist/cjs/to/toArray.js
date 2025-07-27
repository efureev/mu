"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toArray;
const isArrayLike_1 = __importDefault(require("../is/isArrayLike"));
const isBoolean_1 = __importDefault(require("../is/isBoolean"));
const isNumeric_1 = __importDefault(require("../is/isNumeric"));
const isNil_1 = __importDefault(require("../is/isNil"));
const isString_1 = __importDefault(require("../is/isString"));
const copyArray_1 = __importDefault(require("../internal/copyArray"));
const stringToArray_1 = __importDefault(require("../string/stringToArray"));
const values_1 = __importDefault(require("../object/values"));
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
function toArray(value = []) {
    if ((0, isNil_1.default)(value)) {
        return [];
    }
    if ((0, isArrayLike_1.default)(value)) {
        return (0, isString_1.default)(value) ? (0, stringToArray_1.default)(value) : (0, copyArray_1.default)(value);
    }
    if ((0, isNumeric_1.default)(value) || (0, isBoolean_1.default)(value)) {
        return [value];
    }
    if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
    }
    return (0, values_1.default)(value);
}
//# sourceMappingURL=toArray.js.map
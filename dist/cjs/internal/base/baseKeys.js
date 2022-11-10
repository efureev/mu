"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Used for built-in method references. */
const isPrototype_1 = __importDefault(require("../../is/isPrototype"));
const objectProto = Object.prototype;
/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;
const nativeKeys = (argument) => Object.keys(new Object(argument));
/**
 * The base implementation of `keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {string[]} Returns the array of property names.
 */
function baseKeys(object) {
    if (!(0, isPrototype_1.default)(object)) {
        return nativeKeys(object);
    }
    const result = [];
    let key;
    for (key in new Object(object)) {
        if (hasOwnProperty.call(object, key) && key !== 'constructor') {
            result.push(key);
        }
    }
    return result;
}
exports.default = baseKeys;
//# sourceMappingURL=baseKeys.js.map
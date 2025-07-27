"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = equals;
const isObject_1 = __importDefault(require("../is/isObject"));
const equals_1 = __importDefault(require("../object/equals"));
/**
 * Deep comparing the contents of 2 arrays using strict equality
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {Boolean} `true` if the arrays are equal.
 */
function equals(array1, array2) {
    const length1 = array1.length;
    const length2 = array2.length;
    let i;
    // Short circuit if the same array is passed twice
    if (array1 === array2) {
        return true;
    }
    if (length1 !== length2) {
        return false;
    }
    for (i = 0; i < length1; ++i) {
        if (array1[i] && array2[i]) {
            if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
                if (!equals(array1[i], array2[i])) {
                    return false;
                }
                continue;
            }
            if ((0, isObject_1.default)(array1[i]) && (0, isObject_1.default)(array2[i])) {
                if (!(0, equals_1.default)(array1[i], array2[i])) {
                    return false;
                }
                continue;
            }
        }
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=equals.js.map
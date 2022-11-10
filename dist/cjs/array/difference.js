"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The difference will output the elements from array A that are not in the array B.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
function difference(array, array2) {
    return [...new Set(array.filter(x => !array2.includes(x)))];
}
exports.default = difference;
//# sourceMappingURL=difference.js.map
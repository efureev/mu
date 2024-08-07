"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = symmetricalDifference;
/**
 * The symmetricalDifference will output anti-intersection.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
function symmetricalDifference(array, array2) {
    return [...new Set(array)].filter(x => !array2.includes(x)).concat(array2.filter(x => !array.includes(x)));
}
//# sourceMappingURL=symmetricalDifference.js.map
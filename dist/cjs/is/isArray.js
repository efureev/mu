"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isArray;
exports.isArrays = isArrays;
/**
 * This function evaluates whether all parameters are arrays
 */
function isArray(value) {
    return Array.isArray(value);
}
function isArrays(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isArray.');
    }
    return !parameters.some(parameter => !isArray(parameter));
}
//# sourceMappingURL=isArray.js.map
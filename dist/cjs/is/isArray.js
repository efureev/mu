"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrays = void 0;
/**
 * This function evaluates whether all parameters are arrays
 */
function isArray(value) {
    return Array.isArray(value);
}
exports.default = isArray;
function isArrays(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isArray.');
    }
    return !parameters.some(parameter => !isArray(parameter));
}
exports.isArrays = isArrays;
//# sourceMappingURL=isArray.js.map
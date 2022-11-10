"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIntegers = void 0;
/**
 * This function evaluates whether all parameters are integers
 */
function isInteger(value) {
    return Number.isInteger(Number.parseFloat(value));
}
exports.default = isInteger;
function isIntegers(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one number to evaluate isInteger.');
    }
    if (parameters.some(parameter => Number.isNaN(Number.parseFloat(parameter)))) {
        throw new Error('Please provide all numbers to evaluate isInteger.');
    }
    return !parameters.some(parameter => !isInteger(parameter));
}
exports.isIntegers = isIntegers;
//# sourceMappingURL=isInteger.js.map
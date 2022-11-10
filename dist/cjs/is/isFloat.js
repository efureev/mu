"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFloatCanonical = exports.isFloats = void 0;
/**
 * This function evaluates whether all parameters are floats
 */
const vars_1 = require("../core/vars");
function isFloats(...parameters) {
    if (parameters.length === 0)
        throw new Error('Please provide at least one number to evaluate isFloat.');
    if (parameters.some(parameter => Number.isNaN(Number.parseFloat(parameter))))
        throw new Error('Please provide all numbers to evaluate isFloat.');
    return !parameters.some(parameter => !isFloat(Number.parseFloat(parameter)));
}
exports.isFloats = isFloats;
function isFloat(number) {
    const n = Number.parseFloat(number);
    return Number(n) === n && n % 1 !== 0;
}
exports.default = isFloat;
/**
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */
function isFloatCanonical(number) {
    return vars_1.reIsFloat.test(String(number));
}
exports.isFloatCanonical = isFloatCanonical;
//# sourceMappingURL=isFloat.js.map
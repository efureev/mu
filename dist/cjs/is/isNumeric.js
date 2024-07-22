"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isNumeric;
exports.isNumerics = isNumerics;
/**
 * This function evaluates if all the parameters are Numeric
 */
function isNumeric(value) {
    return !(Array.isArray(value) || isNaN(parseFloat(value)) || !isFinite(value));
}
function isNumerics(...parameters) {
    const invalid = parameters.some(parameter => !isNumeric(parameter));
    return !invalid;
}
//# sourceMappingURL=isNumeric.js.map
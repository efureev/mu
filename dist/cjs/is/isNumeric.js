"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumerics = void 0;
/**
 * This function evaluates if all the parameters are Numeric
 */
function isNumeric(value) {
    return !(Array.isArray(value) || isNaN(parseFloat(value)) || !isFinite(value));
}
exports.default = isNumeric;
function isNumerics(...parameters) {
    const invalid = parameters.some(parameter => !isNumeric(parameter));
    return !invalid;
}
exports.isNumerics = isNumerics;
//# sourceMappingURL=isNumeric.js.map
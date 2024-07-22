"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNulls = isNulls;
exports.isNils = isNils;
exports.default = isNil;
exports.isNull = isNull;
/**
 * This function evaluates whether all parameters are null
 */
function isNulls(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isNull.');
    }
    return !parameters.some(parameter => !isNull(parameter));
}
function isNils(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isNull.');
    }
    return !parameters.some(parameter => !isNil(parameter));
}
function isNil(value) {
    return value == null;
}
function isNull(value) {
    return value === null;
}
//# sourceMappingURL=isNil.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = exports.isNils = exports.isNulls = void 0;
/**
 * This function evaluates whether all parameters are null
 */
function isNulls(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isNull.');
    }
    return !parameters.some(parameter => !isNull(parameter));
}
exports.isNulls = isNulls;
function isNils(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isNull.');
    }
    return !parameters.some(parameter => !isNil(parameter));
}
exports.isNils = isNils;
function isNil(value) {
    return value == null;
}
exports.default = isNil;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
//# sourceMappingURL=isNil.js.map
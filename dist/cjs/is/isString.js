"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrings = isStrings;
exports.default = isString;
/**
 * This function evaluates if all the parameters are strings
 */
function isStrings(...parameters) {
    return !parameters.some(parameter => !isString(parameter));
}
function isString(value) {
    return typeof value === 'string';
}
//# sourceMappingURL=isString.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStrings = void 0;
/**
 * This function evaluates if all the parameters are strings
 */
function isStrings(...parameters) {
    return !parameters.some(parameter => !isString(parameter));
}
exports.isStrings = isStrings;
function isString(value) {
    return typeof value === 'string';
}
exports.default = isString;
//# sourceMappingURL=isString.js.map
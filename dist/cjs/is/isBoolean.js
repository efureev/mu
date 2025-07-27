"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isBoolean;
exports.isBooleans = isBooleans;
function isBoolean(value) {
    return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}
function isBooleans(...parameters) {
    return !parameters.some(parameter => !isBoolean(parameter));
}
//# sourceMappingURL=isBoolean.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBooleans = void 0;
function isBoolean(value) {
    return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}
exports.default = isBoolean;
function isBooleans(...parameters) {
    return !parameters.some(parameter => !isBoolean(parameter));
}
exports.isBooleans = isBooleans;
//# sourceMappingURL=isBoolean.js.map
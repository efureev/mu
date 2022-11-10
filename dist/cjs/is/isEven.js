"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEvens = void 0;
function isEven(value) {
    if (Number.isNaN(parseFloat(value)) || !Number.isFinite(Number(value))) {
        return false;
    }
    return value % 2 === 0;
}
exports.default = isEven;
/**
 * This function evaluates whether all parameters are evens
 */
function isEvens(...parameters) {
    for (const parameter of parameters) {
        if (!isEven(parameter)) {
            return false;
        }
    }
    return true;
}
exports.isEvens = isEvens;
//# sourceMappingURL=isEven.js.map
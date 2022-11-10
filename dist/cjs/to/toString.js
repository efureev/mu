"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSymbol_1 = __importDefault(require("../is/isSymbol"));
const vars_1 = require("../core/vars");
const symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 */
function toString(value) {
    if (Array.isArray(value)) {
        return value.toString();
    }
    if ((0, isSymbol_1.default)(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    switch (typeof value) {
        case 'string':
            return value.replace(vars_1.reTrim, '');
        case 'number':
            return value.toString();
        case 'object':
            return value === null ? '' : JSON.stringify(value);
        case 'boolean':
            return value.toString();
    }
    if (!value) {
        return '';
    }
    const result = value + '';
    return result === '0' && 1 / value === -Infinity ? '-0' : result;
}
exports.default = toString;
//# sourceMappingURL=toString.js.map
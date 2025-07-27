"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tap;
/**
 * This method invokes `interceptor` and returns `value`. The interceptor
 * is invoked with one argument; (value). The purpose of this method is to
 * "tap into" a method chain sequence in order to modify intermediate results.
 *
 * @static
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 * @example
 *
 * tap('test') // 'test'
 * tap([1, 2, 3], (value) => value.pop()) // [1,2]
 * tap({b: 2, a: 'test'}, (value) => delete value.a) // {b: 2}
 * tap(()=>100)) // 100
 * tap(()=>100), (value) => value / 2) // 50
 *
 */
const isFunction_1 = __importDefault(require("../is/isFunction"));
const isBasicType_1 = __importDefault(require("../is/isBasicType"));
function tap(value, interceptor) {
    if ((0, isFunction_1.default)(value)) {
        value = value();
    }
    if (interceptor && (0, isFunction_1.default)(interceptor)) {
        if ((0, isBasicType_1.default)(value)) {
            return interceptor(value);
        }
        interceptor(value);
    }
    return value;
}
//# sourceMappingURL=tap.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Used for built-in method references. */
const baseGetTag_1 = __importDefault(require("../internal/base/baseGetTag"));
const objectProto = Object.prototype;
/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;
/** `Object#toString` result references. */
const argumentsTag = '[object Arguments]';
/**
 * The base implementation of `isArguments`.
 *
 * @private
 */
const baseIsArguments = (value) => {
    return value !== null && typeof value === 'object' && (0, baseGetTag_1.default)(value) === argumentsTag;
};
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @example
 *
 * isArguments(function() { return arguments; }());
 * // => true
 *
 * isArguments([1, 2, 3]);
 * // => false
 */
exports.default = baseIsArguments((function () {
    return arguments;
})())
    ? baseIsArguments
    : function (value) {
        return (value !== null &&
            typeof value === 'object' &&
            hasOwnProperty.call(value, 'callee') &&
            !propertyIsEnumerable.call(value, 'callee'));
    };
//# sourceMappingURL=isArguments.js.map
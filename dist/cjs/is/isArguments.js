"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _baseGetTag = _interopRequireDefault(require("../internal/base/baseGetTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/** `Object#toString` result references. */

var argumentsTag = '[object Arguments]';
/**
 * The base implementation of `isArguments`.
 *
 * @private
 */

var baseIsArguments = function baseIsArguments(value) {
  return value !== null && _typeof(value) === 'object' && (0, _baseGetTag.default)(value) === argumentsTag;
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


var _default = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return value !== null && _typeof(value) === 'object' && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

exports.default = _default;
//# sourceMappingURL=isArguments.js.map
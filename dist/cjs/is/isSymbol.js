"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _isObject = require("./isObject");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @example
 *
 * isSymbol(Symbol.iterator); // => true
 *
 * isSymbol('abc'); // => false
 *
 * isSymbol('abc', Symbol.iterator); // => false
 *
 * isSymbol(Symbol.iterator, Symbol.iterator); // => true
 */
function _default() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  return parameters.some(function (value) {
    return _typeof(value) === 'symbol' || (0, _isObject.isObjectLike)(value) && Object.prototype.toString.call(value) === '[object Symbol]';
  });
}
//# sourceMappingURL=isSymbol.js.map
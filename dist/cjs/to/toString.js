"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

var _is = require("../is");

var _vars = require("../core/vars");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 */

function toString(value) {
  if ((0, _is.isArray)(value)) {
    return value.toString();
  }

  if ((0, _is.isSymbol)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  switch (_typeof(value)) {
    case 'string':
      return value.replace(_vars.reTrim, '');

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

  var result = value + '';
  return result === '0' && 1 / value === -Infinity ? '-0' : result;
}
//# sourceMappingURL=toString.js.map
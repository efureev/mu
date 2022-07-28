"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIndex;

var _vars = require("../core/vars");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? Number.MAX_SAFE_INTEGER : length;
  return !!length && (type === 'number' || type !== 'symbol' && _vars.reIsUint.test(value)) && value > -1 && value % 1 === 0 && value < length;
}
//# sourceMappingURL=isIndex.js.map
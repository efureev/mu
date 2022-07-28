"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _node = _interopRequireDefault(require("../internal/node"));

var _baseIsTypedArray = _interopRequireDefault(require("../internal/base/baseIsTypedArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeIsTypedArray = _node.default && _node.default.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array);
 * // => true
 *
 * isTypedArray([]);
 * // => false
 */

var _default = nodeIsTypedArray ? function (value) {
  return nodeIsTypedArray(value);
} : _baseIsTypedArray.default;

exports.default = _default;
//# sourceMappingURL=isTypedArray.js.map
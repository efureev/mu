"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _equals = _interopRequireDefault(require("./../object/equals"));

var _equals2 = _interopRequireDefault(require("./../array/equals"));

var _isObject = _interopRequireDefault(require("../is/isObject"));

var _isString = _interopRequireDefault(require("../is/isString"));

var _isBoolean = _interopRequireDefault(require("../is/isBoolean"));

var _isNumeric = _interopRequireDefault(require("../is/isNumeric"));

var _isFunction = _interopRequireDefault(require("../is/isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {*} first
 * @param {*} second
 * @returns {boolean}
 */
function equals(first, second) {
  if (first === second) {
    return true;
  }

  if ((0, _isString.default)(first) || (0, _isNumeric.default)(first) || (0, _isBoolean.default)(first)) {
    return first === second;
  }

  if (first instanceof Date && second instanceof Date || first instanceof RegExp && second instanceof RegExp) {
    return first.toString() === second.toString();
  }

  if (Array.isArray(first) && Array.isArray(second)) {
    return (0, _equals2.default)(first, second);
  }

  if ((0, _isObject.default)(first) && (0, _isObject.default)(second)) {
    return (0, _equals.default)(first, second);
  }

  if ((0, _isFunction.default)(first) && (0, _isFunction.default)(second)) {
    return ('' + first).valueOf() === ('' + second).valueOf();
  }

  return false;
}
//# sourceMappingURL=equals.js.map
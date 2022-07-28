"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _object = require("./../object");

var _array = require("./../array");

var _is = require("../is");

/**
 * @param {*} first
 * @param {*} second
 * @returns {boolean}
 */
function equals(first, second) {
  if (first === second) {
    return true;
  }

  if ((0, _is.isString)(first) || (0, _is.isNumeric)(first) || (0, _is.isBoolean)(first)) {
    return first === second;
  }

  if (first instanceof Date && second instanceof Date || first instanceof RegExp && second instanceof RegExp) {
    return first.toString() === second.toString();
  }

  if ((0, _is.isArray)(first) && (0, _is.isArray)(second)) {
    return (0, _array.arraysEquals)(first, second);
  }

  if ((0, _is.isObject)(first) && (0, _is.isObject)(second)) {
    return (0, _object.objectsEqual)(first, second);
  }

  if ((0, _is.isFunction)(first) && (0, _is.isFunction)(second)) {
    return ('' + first).valueOf() === ('' + second).valueOf();
  }

  return false;
}
//# sourceMappingURL=equals.js.map
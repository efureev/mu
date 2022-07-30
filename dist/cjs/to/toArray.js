"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

var _isArrayLike = _interopRequireDefault(require("../is/isArrayLike"));

var _isBoolean = _interopRequireDefault(require("../is/isBoolean"));

var _isNumeric = _interopRequireDefault(require("../is/isNumeric"));

var _isNil = _interopRequireDefault(require("../is/isNil"));

var _isString = _interopRequireDefault(require("../is/isString"));

var _copyArray = _interopRequireDefault(require("../internal/copyArray"));

var _stringToArray = _interopRequireDefault(require("../string/stringToArray"));

var _values = _interopRequireDefault(require("../object/values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */

function iteratorToArray(iterator) {
  var data;
  var result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }

  return result;
}
/**
 * Converts `value` to an array.
 *
 * @memberof µ
 * @author efureev
 *
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 *
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * toArray(1);
 * // => []
 *
 * toArray(null);
 * // => []
 */


function toArray() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if ((0, _isNil.default)(value)) {
    return [];
  }

  if ((0, _isArrayLike.default)(value)) {
    return (0, _isString.default)(value) ? (0, _stringToArray.default)(value) : (0, _copyArray.default)(value);
  }

  if ((0, _isNumeric.default)(value) || (0, _isBoolean.default)(value)) {
    return [value];
  }

  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }

  return (0, _values.default)(value);
}
//# sourceMappingURL=toArray.js.map
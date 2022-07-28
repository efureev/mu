"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = baseGetTag;

var _root = _interopRequireDefault(require("../root"));

var _getRawTag = _interopRequireDefault(require("../getRawTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag = _root.default.Symbol ? _root.default.Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {TagTypeNullable|string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in new Object(value) ? (0, _getRawTag.default)(value) : Object.prototype.toString.call(value);
}
//# sourceMappingURL=baseGetTag.js.map
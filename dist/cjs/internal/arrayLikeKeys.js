"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayLikeKeys;

var _is = require("../is");

var _times = _interopRequireDefault(require("../utils/times"));

var _isIndex = _interopRequireDefault(require("./isIndex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array|[]} Returns the array of property names.
 */

function arrayLikeKeys(value) {
  var inherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isArray_ = (0, _is.isArray)(value),
      isArgument = !isArray_ && (0, _is.isArguments)(value),
      isBuff = !isArray_ && !isArgument && (0, _is.isBuffer)(value),
      isType = !isArray_ && !isArgument && !isBuff && (0, _is.isTypedArray)(value),
      skipIndexes = isArray_ || isArgument || isBuff || isType,
      result = skipIndexes ? (0, _times.default)(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key === 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key === 'offset' || key === 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key === 'buffer' || key === 'byteLength' || key === 'byteOffset') || // Skip index properties.
    (0, _isIndex.default)(key, length)))) {
      result.push(key);
    }
  }

  return result;
}
//# sourceMappingURL=arrayLikeKeys.js.map
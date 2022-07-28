"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = baseKeys;

var _isPrototype = _interopRequireDefault(require("../../is/isPrototype"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;

var nativeKeys = function nativeKeys(argument) {
  return Object.keys(new Object(argument));
};
/**
 * The base implementation of `keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {string[]} Returns the array of property names.
 */


function baseKeys(object) {
  if (!(0, _isPrototype.default)(object)) {
    return nativeKeys(object);
  }

  var result = [];
  var key;

  for (key in new Object(object)) {
    if (hasOwnProperty.call(object, key) && key !== 'constructor') {
      result.push(key);
    }
  }

  return result;
}
//# sourceMappingURL=baseKeys.js.map
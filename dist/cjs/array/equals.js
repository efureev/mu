"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _isObject = _interopRequireDefault(require("../is/isObject"));

var _equals = _interopRequireDefault(require("../object/equals"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Deep comparing the contents of 2 arrays using strict equality
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {Boolean} `true` if the arrays are equal.
 */
function equals(array1, array2) {
  var length1 = array1.length;
  var length2 = array2.length;
  var i; // Short circuit if the same array is passed twice

  if (array1 === array2) {
    return true;
  }

  if (length1 !== length2) {
    return false;
  }

  for (i = 0; i < length1; ++i) {
    if (array1[i] && array2[i]) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!equals(array1[i], array2[i])) {
          return false;
        }

        continue;
      }

      if ((0, _isObject.default)(array1[i]) && (0, _isObject.default)(array2[i])) {
        if (!(0, _equals.default)(array1[i], array2[i])) {
          return false;
        }

        continue;
      }
    }

    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=equals.js.map
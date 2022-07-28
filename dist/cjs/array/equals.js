"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = equals;

var _is = require("../is");

var _object = require("../object");

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
      if ((0, _is.isArray)(array1[i]) && (0, _is.isArray)(array2[i])) {
        if (!equals(array1[i], array2[i])) {
          return false;
        }

        continue;
      }

      if ((0, _is.isObject)(array1[i]) && (0, _is.isObject)(array2[i])) {
        if (!(0, _object.objectsEqual)(array1[i], array2[i])) {
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
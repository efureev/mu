"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = arrayEach;

/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {Array} Returns `bool`.
 */
function arrayEach(array, callback) {
  var length = array.length;
  var index = -1;

  while (++index < length) {
    if (callback(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}
//# sourceMappingURL=arrayEach.js.map
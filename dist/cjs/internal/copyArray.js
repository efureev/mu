"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = copyArray;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1;
  var length = source.length;
  array || (array = new Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}
//# sourceMappingURL=copyArray.js.map
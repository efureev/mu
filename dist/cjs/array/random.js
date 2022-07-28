"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;

/**
 * Random function returns random item from array
 *
 * @param {Array} array
 * @returns {unknown}
 */
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}
//# sourceMappingURL=random.js.map
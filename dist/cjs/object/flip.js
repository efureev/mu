"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flip;

/**
 *
 * @param {object} object
 * @example #1
 * flip({ {A : 1, B : 2, C : 3, D : 4}) // {1 : A, 2 : B, 3 : C, 4 : D}
 */
function flip(object) {
  var result = {};

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    result[object[key]] = key;
  }

  return result;
}
//# sourceMappingURL=flip.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intersect;
exports.intersectAll = intersectAll;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Return common items for two arrays
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
function intersect(array, array2) {
  var set = new Set(array);
  return _toConsumableArray(new Set(array2.filter(function (item) {
    return set.has(item);
  })));
}
/**
 * Return common items for all arrays
 *
 * @param array
 * @param arrays
 * @returns {*|any[]}
 */


function intersectAll(array) {
  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  return arrays.reduce(function (previous, next) {
    return intersect(previous, next);
  }, array);
}
//# sourceMappingURL=intersect.js.map
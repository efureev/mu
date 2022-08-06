"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

var _isDate = _interopRequireDefault(require("../is/isDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor'];
/**
 * Clone simple variables including array, {}-like objects, DOM nodes and Date without
 * keeping the old reference. A reference for the object itself is returned if it's not
 * a direct descendant of Object.
 *
 * @param {Object} item The variable to clone
 * @param {Boolean} [cloneDom=true] `true` to clone DOM nodes.
 * @return {Object} clone
 */

function clone(item) {
  var cloneDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (item === null || item === undefined) {
    return item;
  } // @ts-ignore


  if (cloneDom && item.nodeType && item.cloneNode) {
    // @ts-ignore
    return item.cloneNode(true);
  }

  var type = Object.prototype.toString.call(item); // Date

  if ((0, _isDate.default)(item)) {
    // @ts-ignore
    return new Date(item.getTime());
  }

  var i, j, k; // Array

  if (Array.isArray(item)) {
    i = item.length;
    var newClone = [];

    while (i--) {
      newClone[i] = clone(item[i], cloneDom);
    }

    return newClone;
  } // Object


  if (type === '[object Object]' && item.constructor === Object) {
    var key;
    var _newClone = {};

    for (key in item) {
      _newClone[key] = clone(item[key], cloneDom);
    }

    if (enumerables) {
      for (j = enumerables.length; j--;) {
        var _k = enumerables[j];

        if (Object.prototype.hasOwnProperty.call(item, _k)) {
          _newClone[_k] = item[_k];
        }
      }
    }

    return _newClone;
  }

  return item;
}
//# sourceMappingURL=clone.js.map
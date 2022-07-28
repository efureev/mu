"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pick;

var _isEmpty = _interopRequireDefault(require("../is/isEmpty"));

var _forEach = _interopRequireDefault(require("../core/forEach"));

var _select = _interopRequireDefault(require("./select"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {object} object
 * @param {array} paths
 * @returns {object}
 *
 * @example #1
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }
 *
 * @example #2
 * var object = { d: { d: { d:1 } }, b: 2 };
 *
 * pick(object, ['d.d.d']); // => { 'd.d.d': 1 }
 *
 * @example #3
 * var object = { a: [ { id:1 }, { id:2 } ], b: 2 };
 *
 * pick(object, ['d.1.id', b]); // => { 'd.1.id': 2, b: 2 }
 */
function pick(object, paths) {
  var res = {};

  if ((0, _isEmpty.default)(object)) {
    return res;
  }

  (0, _forEach.default)(paths, function (v) {
    res[v] = (0, _select.default)(object, v);
  });
  return res;
}
//# sourceMappingURL=pick.js.map
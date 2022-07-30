"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = times;

var _isFunction = _interopRequireDefault(require("../is/isFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function times() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var iteratee = arguments.length > 1 ? arguments[1] : undefined;
  var result = new Array(n);
  var index = -1;
  var isFn = (0, _isFunction.default)(iteratee);

  while (++index < n) {
    var iterValue = isFn ? iteratee(index) : null;
    result[index] = iterValue || iteratee || index;
  }

  return result;
}
//# sourceMappingURL=times.js.map
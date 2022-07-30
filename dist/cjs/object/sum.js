"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;

var _isNil = _interopRequireDefault(require("../is/isNil"));

var _isNumeric = _interopRequireDefault(require("../is/isNumeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sum(object) {
  var result = 0;

  for (var key in object) {
    var value = object[key];

    if (value instanceof Function) {
      value = value();
    }

    if ((0, _isNil.default)(value) || value === false) {
      value = 0;
    }

    if (!(0, _isNumeric.default)(value)) {
      value = 1;
    }

    result += value;
  }

  return result;
}
//# sourceMappingURL=sum.js.map
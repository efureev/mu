"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;

var _is = require("../is");

function sum(object) {
  var result = 0;

  for (var key in object) {
    var value = object[key];

    if (value instanceof Function) {
      value = value();
    }

    if ((0, _is.isNil)(value) || value === false) {
      value = 0;
    }

    if (!(0, _is.isNumeric)(value)) {
      value = 1;
    }

    result += value;
  }

  return result;
}
//# sourceMappingURL=sum.js.map
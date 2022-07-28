"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEven;
exports.isEvens = isEvens;

function isEven(value) {
  if (Number.isNaN(parseFloat(value)) || !Number.isFinite(Number(value))) {
    return false;
  }

  return value % 2 === 0;
}
/**
 * This function evaluates whether all parameters are evens
 */


function isEvens() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  for (var _i = 0, _parameters = parameters; _i < _parameters.length; _i++) {
    var parameter = _parameters[_i];

    if (!isEven(parameter)) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=isEven.js.map
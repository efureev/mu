"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumeric;
exports.isNumerics = isNumerics;

/**
 * This function evaluates if all the parameters are Numeric
 */
function isNumeric(value) {
  return !(Array.isArray(value) || isNaN(parseFloat(value)) || !isFinite(value));
}

function isNumerics() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    return !isNumeric(parameter);
  });
  return !invalid;
}
//# sourceMappingURL=isNumeric.js.map
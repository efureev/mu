"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInteger;
exports.isIntegers = isIntegers;

/**
 * This function evaluates whether all parameters are integers
 */
function isInteger(value) {
  return Number.isInteger(Number.parseFloat(value));
}

function isIntegers() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  if (parameters.some(function (parameter) {
    return Number.isNaN(Number.parseFloat(parameter));
  })) {
    throw new Error('Please provide all numbers to evaluate isInteger.');
  }

  return !parameters.some(function (parameter) {
    return !isInteger(parameter);
  });
}
//# sourceMappingURL=isInteger.js.map
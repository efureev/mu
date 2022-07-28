"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isArray;
exports.isArrays = isArrays;

/**
 * This function evaluates whether all parameters are arrays
 */
function isArray(value) {
  return Array.isArray(value);
}

function isArrays() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isArray.');
  }

  return !parameters.some(function (parameter) {
    return !isArray(parameter);
  });
}
//# sourceMappingURL=isArray.js.map
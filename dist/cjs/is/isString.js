"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isString;
exports.isStrings = isStrings;

/**
 * This function evaluates if all the parameters are strings
 */
function isStrings() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return !parameters.some(function (parameter) {
    return !isString(parameter);
  });
}

function isString(value) {
  return typeof value === 'string';
}
//# sourceMappingURL=isString.js.map
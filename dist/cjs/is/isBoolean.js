"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;
exports.isBooleans = isBooleans;

function isBoolean(value) {
  return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}

function isBooleans() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return !parameters.some(function (parameter) {
    return !isBoolean(parameter);
  });
}
//# sourceMappingURL=isBoolean.js.map
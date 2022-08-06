"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;
exports.isDates = isDates;

/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
function isDates() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return !parameters.some(function (parameter) {
    return !isDate(parameter);
  });
}

function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]';
}
//# sourceMappingURL=isDate.js.map
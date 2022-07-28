"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDate;

/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
function isDate() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    return Object.prototype.toString.call(parameter) !== '[object Date]';
  });
  return !invalid;
}
//# sourceMappingURL=isDate.js.map
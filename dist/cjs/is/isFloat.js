"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isFloat;
exports.isFloatCanonical = isFloatCanonical;
exports.isFloats = isFloats;

var _vars = require("../core/vars");

/**
 * This function evaluates whether all parameters are floats
 */
function isFloats() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isFloat.');
  if (parameters.some(function (parameter) {
    return Number.isNaN(Number.parseFloat(parameter));
  })) throw new Error('Please provide all numbers to evaluate isFloat.');
  return !parameters.some(function (parameter) {
    return !isFloat(Number.parseFloat(parameter));
  });
}

function isFloat(number) {
  var n = Number.parseFloat(number);
  return Number(n) === n && n % 1 !== 0;
}
/**
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */


function isFloatCanonical(number) {
  return _vars.reIsFloat.test(String(number));
}
//# sourceMappingURL=isFloat.js.map
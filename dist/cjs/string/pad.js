"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pad;
exports.padEnd = padEnd;
exports.padStart = padStart;

var _isNil = _interopRequireDefault(require("../is/isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function add symbols to string in start or end
 *
 * @param {string | number | undefined} value
 * @param {int} targetLength
 * @param {string} padString
 * @param {boolean} leading If TRUE add symbols before string, else - after
 * @returns {string}
 */
function pad(value, targetLength) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  var leading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  targetLength = Math.trunc(targetLength); //floor if number or convert non-number to 0;

  if ((0, _isNil.default)(value)) {
    return '';
  }

  value = String(value);

  if (value.length > targetLength) {
    return value;
  }

  targetLength = targetLength - value.length;

  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
  }

  return leading ? padString.slice(0, targetLength) + value : value + padString.slice(0, targetLength);
}
/**
 * This function add leading symbols
 */


function padStart(value, targetLength) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return pad(value, targetLength, padString);
}
/**
 * This function add ending symbols
 */


function padEnd(value, targetLength) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return pad(value, targetLength, padString, false);
}
//# sourceMappingURL=pad.js.map
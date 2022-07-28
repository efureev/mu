"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = number;
exports.numberRus = numberRus;

var _isInteger = _interopRequireDefault(require("../is/isInteger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formatting number
 * @param {String|Number} value
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {Boolean} clearDecimals
 * @returns {string}
 */
function number(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var decPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';
  var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  var clearDecimals = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
  var sign = value < 0 ? '-' : '';
  value = Math.abs(+value || 0);
  var intPart = parseInt(value.toFixed(decimals), 10) + ''; // const intPartStr = intPart + ''

  var j = intPart.length > 3 ? intPart.length % 3 : 0;
  return sign + (j ? intPart.slice(0, j) + thousandsSeparator : '') + intPart.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) + (decimals ? clearDecimals && (0, _isInteger.default)(value) ? '' : decPoint + Math.abs(value - +intPart).toFixed(decimals).slice(2) : '');
}

function numberRus(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return number(value, decimals, '.', ' ', true);
}
//# sourceMappingURL=number.js.map
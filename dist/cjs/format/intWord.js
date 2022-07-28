"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = intWord;

var _number = _interopRequireDefault(require("./number"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnitsDefault = ['', 'K', 'M', 'B', 'T'];
/**
 * Format
 * @param {Number|String} value
 * @param {Array} units
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */

function intWord(value) {
  var units = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : UnitsDefault;
  var kilo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;
  var decimals = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  var decPoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '.';
  var thousandsSeparator = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ',';
  var suffixSeparator = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';
  var unit = units.length - 1;
  decimals = isNaN(decimals) ? 2 : Math.abs(decimals);

  for (var i = 0; i < units.length; i++) {
    if (value < Math.pow(kilo, i + 1)) {
      unit = i;
      break;
    }
  }

  var humanized = +value / Math.pow(kilo, unit);
  var suffix = units[unit] ? suffixSeparator + units[unit] : '';
  return (0, _number.default)(humanized, decimals, decPoint, thousandsSeparator) + suffix;
}
//# sourceMappingURL=intWord.js.map
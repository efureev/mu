"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fileSize;

var _intWord = _interopRequireDefault(require("./intWord"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Display
 * @param {Number|String} size
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
function fileSize(size) {
  var kilo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1024;
  var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var decPoint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var thousandsSeparator = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ',';
  var suffixSeparator = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ' ';

  if (size <= 0) {
    return '0 bytes';
  }

  if (size < kilo) {
    decimals = 0;
  }

  return (0, _intWord.default)(size, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimals, decPoint, thousandsSeparator, suffixSeparator);
}
//# sourceMappingURL=fileSize.js.map
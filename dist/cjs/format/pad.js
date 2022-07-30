"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padDateTime = padDateTime;
exports.padNumber = padNumber;

var _pad = require("../string/pad");

var _isNil = _interopRequireDefault(require("../is/isNil"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function padNumber(value, targetLength) {
  if ((0, _isNil.default)(value)) {
    return '0';
  }

  return (0, _pad.padStart)(value, targetLength, '0');
}

function padDateTime(value) {
  if ((0, _isNil.default)(value)) {
    return '00';
  }

  return (0, _pad.padStart)(value, 2, '0');
}
//# sourceMappingURL=pad.js.map
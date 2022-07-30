"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

var _pad = require("../format/pad");

/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */
function toString() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return date.getFullYear() + '-' + (0, _pad.padDateTime)(date.getMonth() + 1) + '-' + (0, _pad.padDateTime)(date.getDate()) + 'T' + (0, _pad.padDateTime)(date.getHours()) + ':' + (0, _pad.padDateTime)(date.getMinutes()) + ':' + (0, _pad.padDateTime)(date.getSeconds());
}
//# sourceMappingURL=toString.js.map
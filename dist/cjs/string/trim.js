"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _toString = _interopRequireDefault(require("../to/toString"));

var _vars = require("../core/vars");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This function trim string
 *
 * @param {*} string
 * @returns {string}
 */
function trim(string) {
  string = (0, _toString.default)(string);

  if (!string) {
    return string;
  }

  return string.replace(_vars.reTrim, '');
}
//# sourceMappingURL=trim.js.map
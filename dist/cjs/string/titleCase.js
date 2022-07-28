"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = titleCase;

var _upperFirst = _interopRequireDefault(require("./upperFirst"));

var _clearSpaces = _interopRequireDefault(require("./clearSpaces"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
function titleCase(string) {
  return (0, _clearSpaces.default)(string).replace(/\w\S*/g, function (txt) {
    return (0, _upperFirst.default)(txt);
  });
}
//# sourceMappingURL=titleCase.js.map
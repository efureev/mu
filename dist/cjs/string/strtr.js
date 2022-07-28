"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = strtr;
exports.replaceByTemplate = replaceByTemplate;

var _pregQuote = _interopRequireDefault(require("../utils/pregQuote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Replace all entries in string according to map
 *
 * @param {string} str
 * @param {{}} map
 * @return {string}
 */
function replaceByTemplate(str, map) {
  var cmpString = '',
      offset = 0,
      find = -1,
      addString = '';

  for (var index = 0; index < str.length; index++) {
    cmpString += '0';
  }

  for (var fr in map) {
    offset = 0;
    var val = String(map[fr]);

    while ((find = str.indexOf(fr, offset)) !== -1) {
      if (Number.parseInt(cmpString.slice(find, find + fr.length)) !== 0) {
        offset = find + 1;
        continue;
      }

      for (var k = 0; k < val.length; k++) {
        addString += '1';
      }

      cmpString = cmpString.slice(0, find) + addString + cmpString.slice(find + fr.length, cmpString.length);
      str = str.slice(0, find) + val + str.slice(find + fr.length, str.length);
      offset = find + val.length; //+ 1

      addString = '';
    }
  }

  return str;
}

function strtr(str, from, to) {
  if (_typeof(from) === 'object') {
    return replaceByTemplate(str, from);
  }

  if (!to) {
    return str;
  }

  for (var index = 0; index < from.length; index++) {
    str = str.replace(new RegExp((0, _pregQuote.default)(from.charAt(index)), 'g'), to.charAt(index));
  }

  return str;
}
//# sourceMappingURL=strtr.js.map
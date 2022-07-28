"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pascalCase = exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var preserveCamelCase = function preserveCamelCase(value) {
  var isLastCharLower = false;
  var isLastCharUpper = false;
  var isLastLastCharUpper = false;

  for (var i = 0; i < value.length; i++) {
    var character = value[i];

    if (isLastCharLower && /[A-Za-z]/.test(character) && character.toUpperCase() === character) {
      value = value.slice(0, i) + '-' + value.slice(i);
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i++;
    } else if (isLastCharUpper && isLastLastCharUpper && /[A-Za-z]/.test(character) && character.toLowerCase() === character) {
      value = value.slice(0, i - 1) + '-' + value.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return value;
};

var camelCase = function camelCase(input, options) {
  options = _objectSpread({
    pascalCase: false
  }, options ? options : {});

  var postProcess = function postProcess(x) {
    return options && options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;
  };

  var str = typeof input === 'string' ? input.trim() : input.map(function (x) {
    return x.trim();
  }).filter(function (x) {
    return x.length;
  }).join('-');

  if (str.length === 0) {
    return '';
  }

  if (str.length === 1) {
    return options.pascalCase ? str.toUpperCase() : str.toLowerCase();
  }

  var hasUpperCase = str !== str.toLowerCase();

  if (hasUpperCase) {
    str = preserveCamelCase(str);
  }

  str = str.replace(/^[ ._\-]+/, '').toLowerCase().replace(/[ ._\-]+(\w|$)/g, function (_, p1) {
    return p1.toUpperCase();
  }).replace(/\d+(\w|$)/g, function (m) {
    return m.toUpperCase();
  });
  return postProcess(str);
};

var pascalCase = function pascalCase(input) {
  return camelCase(input, {
    pascalCase: true
  });
};

exports.pascalCase = pascalCase;
var _default = camelCase;
exports.default = _default;
//# sourceMappingURL=camelCase.js.map
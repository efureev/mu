"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "camelCase", {
  enumerable: true,
  get: function get() {
    return _camelCase.default;
  }
});
Object.defineProperty(exports, "clearSpaces", {
  enumerable: true,
  get: function get() {
    return _clearSpaces.default;
  }
});
Object.defineProperty(exports, "endsWith", {
  enumerable: true,
  get: function get() {
    return _endsWith.default;
  }
});
Object.defineProperty(exports, "pad", {
  enumerable: true,
  get: function get() {
    return _pad.default;
  }
});
Object.defineProperty(exports, "padEnd", {
  enumerable: true,
  get: function get() {
    return _pad.padEnd;
  }
});
Object.defineProperty(exports, "padStart", {
  enumerable: true,
  get: function get() {
    return _pad.padStart;
  }
});
Object.defineProperty(exports, "pascalCase", {
  enumerable: true,
  get: function get() {
    return _camelCase.pascalCase;
  }
});
Object.defineProperty(exports, "replaceByTemplate", {
  enumerable: true,
  get: function get() {
    return _strtr.replaceByTemplate;
  }
});
Object.defineProperty(exports, "startsWith", {
  enumerable: true,
  get: function get() {
    return _startsWith.default;
  }
});
Object.defineProperty(exports, "stringToArray", {
  enumerable: true,
  get: function get() {
    return _stringToArray.default;
  }
});
Object.defineProperty(exports, "strtr", {
  enumerable: true,
  get: function get() {
    return _strtr.default;
  }
});
Object.defineProperty(exports, "titleCase", {
  enumerable: true,
  get: function get() {
    return _titleCase.default;
  }
});
Object.defineProperty(exports, "trim", {
  enumerable: true,
  get: function get() {
    return _trim.default;
  }
});
Object.defineProperty(exports, "trimPrefix", {
  enumerable: true,
  get: function get() {
    return _trimPrefix.default;
  }
});
Object.defineProperty(exports, "trimSuffix", {
  enumerable: true,
  get: function get() {
    return _trimSuffix.default;
  }
});
Object.defineProperty(exports, "upperFirst", {
  enumerable: true,
  get: function get() {
    return _upperFirst.default;
  }
});

var _pad = _interopRequireWildcard(require("./pad"));

var _stringToArray = _interopRequireDefault(require("./stringToArray"));

var _trim = _interopRequireDefault(require("./trim"));

var _upperFirst = _interopRequireDefault(require("./upperFirst"));

var _titleCase = _interopRequireDefault(require("./titleCase"));

var _clearSpaces = _interopRequireDefault(require("./clearSpaces"));

var _endsWith = _interopRequireDefault(require("./endsWith"));

var _startsWith = _interopRequireDefault(require("./startsWith"));

var _trimPrefix = _interopRequireDefault(require("./trimPrefix"));

var _trimSuffix = _interopRequireDefault(require("./trimSuffix"));

var _camelCase = _interopRequireWildcard(require("./camelCase"));

var _strtr = _interopRequireWildcard(require("./strtr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=index.js.map
/**
 * Binding Methods to Objects
 *
 * @example
 *  const obj = {
 *    msg: 'Name is',
 *    buildMessage: (name) =>this.msg + ' ' + name
 *  }
 *  g = bind(obj, obj.buildMessage);
 *  alert(g('Smith')); // displays: Name is Smith
 */
function bind(object, method) {
  return function () {
    return method.apply(object, arguments);
  };
}

var enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor'];
/**
 * Clone simple variables including array, {}-like objects, DOM nodes and Date without
 * keeping the old reference. A reference for the object itself is returned if it's not
 * a direct descendant of Object.
 *
 * @param {Object} item The variable to clone
 * @param {Boolean} [cloneDom=true] `true` to clone DOM nodes.
 * @return {Object} clone
 */

function clone(item) {
  var cloneDom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (item === null || item === undefined) {
    return item;
  }

  if (cloneDom && item.nodeType && item.cloneNode) {
    return item.cloneNode(true);
  }

  var type = Object.prototype.toString.call(item);
  var i, j, k, newClone, key; // Date

  if (type === '[object Date]') {
    return new Date(item.getTime());
  } // Array


  if (type === '[object Array]') {
    i = item.length;
    newClone = [];

    while (i--) {
      newClone[i] = clone(item[i], cloneDom);
    }
  } // Object
  else if (type === '[object Object]' && item.constructor === Object) {
    newClone = {};

    for (key in item) {
      newClone[key] = clone(item[key], cloneDom);
    }

    if (enumerables) {
      for (j = enumerables.length; j--;) {
        k = enumerables[j];

        if (Object.prototype.hasOwnProperty.call(item, k)) {
          newClone[k] = item[k];
        }
      }
    }
  }

  return newClone || item;
}

var symToStringTag$2 = Symbol.toStringTag;
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    nullTag$1 = '[object Null]',
    proxyTag = '[object Proxy]',
    undefinedTag$1 = '[object Undefined]';
/**
 * This function evaluates whether all parameters are function
 */

function isFunctions() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  var invalid = parameters.some(function (parameter) {
    return !isFunction(parameter);
  });
  return !invalid;
}
function isFunction(parameter) {
  var tag = baseGetTag$1(parameter);
  return tag === funcTag$1 || tag === genTag || tag === asyncTag || tag === proxyTag;
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 */

function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag$1 : nullTag$1;
  }

  return symToStringTag$2 in new Object(value) ? getRawTag$1(value) : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 */


function getRawTag$1(value) {
  var isOwn = Object.prototype.hasOwnProperty.call(value, symToStringTag$2);
  var tag = value[symToStringTag$2];
  var unmasked = false;

  try {
    value[symToStringTag$2] = undefined;
    unmasked = true;
  } catch (error) {}

  var result = objectToString(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$2] = tag;
    } else {
      delete value[symToStringTag$2];
    }
  }

  return result;
}
/**
 * @private
 */


function objectToString(value) {
  return Object.prototype.toString.call(value);
}

function isBoolean(value) {
  return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}
function isBooleans() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return !parameters.some(function (parameter) {
    return !isBoolean(parameter);
  });
}

/**
 * This function evaluates whether all parameters are null
 */
function isNulls() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isNull.');
  }

  return !parameters.some(function (parameter) {
    return !isNull(parameter);
  });
}
function isNils() {
  for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parameters[_key2] = arguments[_key2];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isNull.');
  }

  return !parameters.some(function (parameter) {
    return !isNil(parameter);
  });
}
function isNil(value) {
  return value == null;
}
function isNull(value) {
  return value === null;
}

/**
 * This function evaluates if all the parameters are Numeric
 */
function isNumeric(value) {
  return !(Array.isArray(value) || isNaN(parseFloat(value)) || !isFinite(value));
}
function isNumerics() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    return !isNumeric(parameter);
  });
  return !invalid;
}

/**
 * This function evaluates if all the parameters are strings
 */
function isStrings() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return !parameters.some(function (parameter) {
    return !isString(parameter);
  });
}
function isString(value) {
  return typeof value === 'string';
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var isO = Object.prototype.toString.call(null) === '[object Object]' ? function (value) {
  // check ownerDocument here as well to exclude DOM nodes
  return value != null && Object.prototype.toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
} : function (value) {
  return Object.prototype.toString.call(value) === '[object Object]';
};
/**
 * This function evaluates whether all parameters are objects
 */

function isObjects() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isObject.');
  }

  var invalid = parameters.some(function (parameter) {
    return !isO(parameter);
  });
  return !invalid;
}
function isObject(value) {
  return isO(value);
}
function isEmptyObject() {
  for (var _len2 = arguments.length, parameters = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parameters[_key2] = arguments[_key2];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isObject.');
  }

  var invalid = parameters.some(function (parameter) {
    if (!isObject(parameter)) return true;

    for (var key in parameter) {
      return true;
    }
  });
  return !invalid;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @example
 *
 * isObjectLike({}); // => true
 *
 * isObjectLike([]); // => true
 *
 * isObjectLike([1, 2, 3]); // => true
 *
 * isObjectLike(new Function()); // => false
 *
 * isObjectLike(null); // => false
 */

function isObjectLike(value) {
  return value !== null && _typeof(value) === 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @example
 *
 * isSymbol(Symbol.iterator); // => true
 *
 * isSymbol('abc'); // => false
 *
 * isSymbol('abc', Symbol.iterator); // => false
 *
 * isSymbol(Symbol.iterator, Symbol.iterator); // => true
 */

function isSymbol () {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  return parameters.some(function (value) {
    return _typeof(value) === 'symbol' || isObjectLike(value) && Object.prototype.toString.call(value) === '[object Symbol]';
  });
}

function isBasicType(value) {
  return !isAdvancedType(value);
}
function isAdvancedType(value) {
  return !isNil(value) && (isSymbol(value) || !isString(value) && !isNumeric(value) && !isBoolean(value));
}

/**
 * This method invokes `interceptor` and returns `value`. The interceptor
 * is invoked with one argument; (value). The purpose of this method is to
 * "tap into" a method chain sequence in order to modify intermediate results.
 *
 * @static
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 * @example
 *
 * tap('test') // 'test'
 * tap([1, 2, 3], (value) => value.pop()) // [1,2]
 * tap({b: 2, a: 'test'}, (value) => delete value.a) // {b: 2}
 * tap(()=>100)) // 100
 * tap(()=>100), (value) => value / 2) // 50
 *
 */
function tap(value, interceptor) {
  if (isFunction(value)) {
    value = value();
  }

  if (interceptor && isFunction(interceptor)) {
    if (isBasicType(value)) {
      return interceptor(value);
    }

    interceptor(value);
  }

  return value;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 *
 * @example
 *
 * isLength(3);
 * // => true
 *
 * isLength(Number.MIN_VALUE);
 * // => false
 *
 * isLength(Infinity);
 * // => false
 *
 * isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @example
 *
 * isArrayLike([1, 2, 3]);
 * // => true
 *
 * isArrayLike(document.body.children);
 * // => true
 *
 * isArrayLike('abc');
 * // => true
 *
 * isArrayLike(()=>{}));
 * // => false
 */

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || new Function('return this')();

/** Built-in value references. */

var symToStringTag$1 = root.Symbol ? root.Symbol.toStringTag : undefined;
/** Used for built-in method references. */

var objectProto$4 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto$4.toString;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];
  var unmasked = false;

  try {
    value[symToStringTag$1] = undefined;
    unmasked = true;
  } catch (error) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }

  return result;
}

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';
var symToStringTag = root.Symbol ? root.Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {TagTypeNullable|string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in new Object(value) ? getRawTag(value) : Object.prototype.toString.call(value);
}

var objectProto$3 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;
/** `Object#toString` result references. */

var argumentsTag$1 = '[object Arguments]';
/**
 * The base implementation of `isArguments`.
 *
 * @private
 */

var baseIsArguments = function baseIsArguments(value) {
  return value !== null && _typeof(value) === 'object' && baseGetTag(value) === argumentsTag$1;
};
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @example
 *
 * isArguments(function() { return arguments; }());
 * // => true
 *
 * isArguments([1, 2, 3]);
 * // => false
 */


var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return value !== null && _typeof(value) === 'object' && hasOwnProperty$2.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

/** Detect free variable `exports`. */

var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !('nodeType' in module) && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule$1 && freeModule$1.exports === freeExports$1;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @example
 *
 * isBuffer(new Buffer(2));
 * // => true
 *
 * isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || function () {
  return false;
};

/** Detect free variable `exports`. */
var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */

var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !('nodeType' in module) && module;
/** Used to access faster Node.js helpers. */

var node = (function () {
  try {
    // Use `util.types` for Node.js 10+.
    return freeModule && freeModule.require && freeModule.require('util').types;
  } catch (error) {}
})();

/**
 * This function evaluates whether all parameters are arrays
 */
function isArray(value) {
  return Array.isArray(value);
}
function isArrays() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isArray.');
  }

  return !parameters.some(function (parameter) {
    return !isArray(parameter);
  });
}

/**
 * This function evaluates whether all parameters are blobs
 */
function isBlobs() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isBlob.');
  }

  return !parameters.some(function (parameter) {
    return !isBlob(parameter);
  });
}
function isBlob(value) {
  return Object.prototype.toString.call(value) === '[object Blob]';
}

/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
function isDate() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    return Object.prototype.toString.call(parameter) !== '[object Date]';
  });
  return !invalid;
}

/**
 * This function evaluates if all the parameters are empty
 */

function isEmpty() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  var invalid = parameters.some(function (parameter) {
    switch (Object.prototype.toString.call(parameter)) {
      case '[object String]':
        if (parameter.trim().length) return true;
        break;

      case '[object Number]':
        if (parameter !== 0) return true;
        break;

      case '[object Date]':
        return true;

      case '[object Array]':
        return parameter.length !== 0;

      case '[object Boolean]':
        return parameter === false;

      case '[object Object]':
        return !isEmptyObject(parameter);
      // case '[object Function]':
      // case '[object AsyncFunction]':
      // case '[object Undefined]':
      // case '[object Null]':
    }

    return false;
  });
  return !invalid;
}

function isEven(value) {
  if (Number.isNaN(parseFloat(value)) || !Number.isFinite(Number(value))) {
    return false;
  }

  return value % 2 === 0;
}
/**
 * This function evaluates whether all parameters are evens
 */

function isEvens() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  for (var _i = 0, _parameters = parameters; _i < _parameters.length; _i++) {
    var parameter = _parameters[_i];

    if (!isEven(parameter)) {
      return false;
    }
  }

  return true;
}

var reTrim = /^\s+|\s+$/g;
/** Used to detect binary string values. */

var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */

var reIsOctal = /^0o[0-7]+$/i;
/** Used to detect bad signed hexadecimal string values. */

var reIsBadHex = /^[+-]0x[\da-f]+$/i;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Used to detect float values. */

var reIsFloat = /^[+|-]?\d+\.\d+$/;

/**
 * This function evaluates whether all parameters are floats
 */
function isFloats() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isFloat.');
  if (parameters.some(function (parameter) {
    return Number.isNaN(Number.parseFloat(parameter));
  })) throw new Error('Please provide all numbers to evaluate isFloat.');
  return !parameters.some(function (parameter) {
    return !isFloat(Number.parseFloat(parameter));
  });
}
function isFloat(number) {
  var n = Number.parseFloat(number);
  return Number(n) === n && n % 1 !== 0;
}
/**
 * @example
 * TRUE:
 *  where `isFloat` === true && '2.0', '-2.0', -2.212, +2.212, '+2.212', '3.14'
 */

function isFloatCanonical(number) {
  return reIsFloat.test(String(number));
}

/**
 * This function evaluates whether all parameters are integers
 */
function isInteger(value) {
  return Number.isInteger(Number.parseFloat(value));
}
function isIntegers() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.');
  }

  if (parameters.some(function (parameter) {
    return Number.isNaN(Number.parseFloat(parameter));
  })) {
    throw new Error('Please provide all numbers to evaluate isInteger.');
  }

  return !parameters.some(function (parameter) {
    return !isInteger(parameter);
  });
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = isFunction(Ctor) && Ctor.prototype || objectProto$2;
  return value === proto;
}

/** `Object#toString` result references. */
var argumentsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argumentsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `isTypedArray` without Node.js optimizations.
 *
 * @private
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && typedArrayTags[baseGetTag(value)];
}

var nodeIsTypedArray = node && node.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array);
 * // => true
 *
 * isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? function (value) {
  return nodeIsTypedArray(value);
} : baseIsTypedArray;

function times() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var iteratee = arguments.length > 1 ? arguments[1] : undefined;
  var result = new Array(n);
  var index = -1;
  var isFn = isFunction(iteratee);

  while (++index < n) {
    var iterValue = isFn ? iteratee(index) : null;
    result[index] = iterValue || iteratee || index;
  }

  return result;
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? Number.MAX_SAFE_INTEGER : length;
  return !!length && (type === 'number' || type !== 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 === 0 && value < length;
}

/** Used for built-in method references. */

var objectProto$1 = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array|[]} Returns the array of property names.
 */

function arrayLikeKeys(value) {
  var inherited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isArray_ = Array.isArray(value),
      isArgument = !isArray_ && isArguments(value),
      isBuff = !isArray_ && !isArgument && isBuffer(value),
      isType = !isArray_ && !isArgument && !isBuff && isTypedArray(value),
      skipIndexes = isArray_ || isArgument || isBuff || isType,
      result = skipIndexes ? times(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key === 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key === 'offset' || key === 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key === 'buffer' || key === 'byteLength' || key === 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;

var nativeKeys = function nativeKeys(argument) {
  return Object.keys(new Object(argument));
};
/**
 * The base implementation of `keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {string[]} Returns the array of property names.
 */


function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }

  var result = [];
  var key;

  for (key in new Object(object)) {
    if (hasOwnProperty.call(object, key) && key !== 'constructor') {
      result.push(key);
    }
  }

  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi');
 * // => ['0', '1']
 */

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

function equal(origin) {
  var i, l, leftChain, rightChain;

  for (var _len = arguments.length, list = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    list[_key - 1] = arguments[_key];
  }

  if (!isObject(origin) || list.length === 0) {
    throw new Error('Need two or more arguments to compare');
  }

  function compare2Objects(x, y) {
    var p; // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    // isNumeric(x,y)

    if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
      return true;
    } // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes


    if (x === y) {
      return true;
    } // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes


    if (typeof x === 'function' && typeof y === 'function' || x instanceof Date && y instanceof Date || x instanceof RegExp && y instanceof RegExp || x instanceof String && y instanceof String || x instanceof Number && y instanceof Number) {
      return x.toString() === y.toString();
    } // At last checking prototypes as good as we can


    if (!(x instanceof Object && y instanceof Object)) {
      return false;
    }

    if (Object.prototype.isPrototypeOf.call(x, y) || Object.prototype.isPrototypeOf.call(y, x)) {
      return false;
    }

    if (x.constructor !== y.constructor) {
      return false;
    }

    if (x.prototype !== y.prototype) {
      return false;
    } // Check for infinitive linking loops


    if (leftChain.includes(x) || rightChain.includes(y)) {
      return false;
    } // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance


    for (p in y) {
      if (Object.prototype.isPrototypeOf.call(y, p) !== Object.prototype.isPrototypeOf.call(x, p)) {
        return false;
      } else if (_typeof(y[p]) !== _typeof(x[p])) {
        return false;
      }
    }

    for (p in x) {
      if (Object.prototype.isPrototypeOf.call(y, p) !== Object.prototype.isPrototypeOf.call(x, p)) {
        return false;
      } else if (_typeof(y[p]) !== _typeof(x[p])) {
        return false;
      }

      switch (_typeof(x[p])) {
        case 'object':
        case 'function':
          leftChain.push(x);
          rightChain.push(y);

          if (!compare2Objects(x[p], y[p])) {
            return false;
          }

          leftChain.pop();
          rightChain.pop();
          break;

        default:
          if (x[p] !== y[p]) {
            return false;
          }

          break;
      }
    }

    return true;
  }

  for (i = 0, l = list.length; i < l; i++) {
    leftChain = []; // @Todo: this can be cached

    rightChain = [];

    if (!compare2Objects(origin, list[i])) {
      return false;
    }
  }

  return true;
}

/**
 * Deep comparing the contents of 2 arrays using strict equality
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {Boolean} `true` if the arrays are equal.
 */

function equals$1(array1, array2) {
  var length1 = array1.length;
  var length2 = array2.length;
  var i; // Short circuit if the same array is passed twice

  if (array1 === array2) {
    return true;
  }

  if (length1 !== length2) {
    return false;
  }

  for (i = 0; i < length1; ++i) {
    if (array1[i] && array2[i]) {
      if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
        if (!equals$1(array1[i], array2[i])) {
          return false;
        }

        continue;
      }

      if (isObject(array1[i]) && isObject(array2[i])) {
        if (!equal(array1[i], array2[i])) {
          return false;
        }

        continue;
      }
    }

    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {*} first
 * @param {*} second
 * @returns {boolean}
 */

function equals(first, second) {
  if (first === second) {
    return true;
  }

  if (isString(first) || isNumeric(first) || isBoolean(first)) {
    return first === second;
  }

  if (first instanceof Date && second instanceof Date || first instanceof RegExp && second instanceof RegExp) {
    return first.toString() === second.toString();
  }

  if (Array.isArray(first) && Array.isArray(second)) {
    return equals$1(first, second);
  }

  if (isObject(first) && isObject(second)) {
    return equal(first, second);
  }

  if (isFunction(first) && isFunction(second)) {
    return ('' + first).valueOf() === ('' + second).valueOf();
  }

  return false;
}

/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} callback The function invoked per iteration.
 * @returns {Array} Returns `bool`.
 */
function arrayEach(array, callback) {
  var length = array.length;
  var index = -1;

  while (++index < length) {
    if (callback(array[index], index, array) === false) {
      break;
    }
  }

  return array;
}

function forEach(collection, iterateFn) {
  if (Array.isArray(collection)) {
    return arrayEach(collection, iterateFn);
  }

  var baseEach = function baseEach(object, iterateFn) {
    return object && createBaseFor()(object, iterateFn, keys);
  };

  var func = createBaseEach(baseEach);
  return func(collection, iterateFn);
}

function createBaseFor() {
  var fromRight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (object, iterateFn, keysFunc) {
    var index = -1,
        iterable = new Object(object),
        properties = keysFunc(object),
        length = properties.length,
        key;

    while (length--) {
      key = properties[fromRight ? length : ++index];

      if (iterateFn(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

function createBaseEach(eachFunc) {
  var fromRight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (collection, iterateFn) {
    if (collection == null) {
      return collection;
    }

    if (!isArrayLike(collection)) {
      return eachFunc(collection, iterateFn);
    }

    var length = collection.length;
    var iterable = new Object(collection);
    var index = fromRight ? length : -1;

    while (fromRight ? index-- : ++index < length) {
      if (iterateFn(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}

/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {boolean} strict Strict comparison (===) or (==). For example, it should be used for digit case-keys.
 * @return {*}
 */
function match(expr, cases) {
  var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _iterator = _createForOfIteratorHelper(Array.isArray(cases) ? cases : Object.entries(cases)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          pattern = _step$value[0],
          action = _step$value[1];

      var prn = typeof pattern === 'function' ? pattern() : pattern;

      if (strict ? expr === prn : expr == prn) {
        return typeof action === 'function' ? action() : action;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return Array.isArray(cases) ? undefined : cases.default;
}

/**
 * Clear array
 */
function clear(array) {
  array.length = 0;
}

/**
 * The difference will output the elements from array A that are not in the array B.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
function difference(array, array2) {
  return _toConsumableArray(new Set(array.filter(function (x) {
    return !array2.includes(x);
  })));
}

/**
 * Random function returns random item from array
 *
 * @param {Array} array
 * @returns {unknown}
 */
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * The symmetricalDifference will output anti-intersection.
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
function symmetricalDifference(array, array2) {
  return _toConsumableArray(new Set(array)).filter(function (x) {
    return !array2.includes(x);
  }).concat(array2.filter(function (x) {
    return !array.includes(x);
  }));
}

/**
 * Return common items for two arrays
 *
 * @param {Array} array
 * @param {Array} array2
 * @returns {any[]}
 */
function intersect(array, array2) {
  var set = new Set(array);
  return _toConsumableArray(new Set(array2.filter(function (item) {
    return set.has(item);
  })));
}
/**
 * Return common items for all arrays
 *
 * @param array
 * @param arrays
 * @returns {*|any[]}
 */

function intersectAll(array) {
  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  return arrays.reduce(function (previous, next) {
    return intersect(previous, next);
  }, array);
}

var nowFn = Date.now || function () {
  return new Date().getTime();
};
/**
 * This function return Date now
 */


function now() {
  return nowFn();
}

/**
 * This function add symbols to string in start or end
 *
 * @param {string | number | undefined} value
 * @param {int} targetLength
 * @param {string} padString
 * @param {boolean} leading If TRUE add symbols before string, else - after
 * @returns {string}
 */
function pad(value, targetLength) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  var leading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  targetLength = Math.trunc(targetLength); //floor if number or convert non-number to 0;

  if (isNil(value)) {
    return '';
  }

  value = String(value);

  if (value.length > targetLength) {
    return value;
  }

  targetLength = targetLength - value.length;

  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
  }

  return leading ? padString.slice(0, targetLength) + value : value + padString.slice(0, targetLength);
}
/**
 * This function add leading symbols
 */

function padStart(value, targetLength) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return pad(value, targetLength, padString);
}
/**
 * This function add ending symbols
 */

function padEnd(value, targetLength) {
  var padString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return pad(value, targetLength, padString, false);
}

function padNumber(value, targetLength) {
  if (isNil(value)) {
    return '0';
  }

  return padStart(value, targetLength, '0');
}
function padDateTime(value) {
  if (isNil(value)) {
    return '00';
  }

  return padStart(value, 2, '0');
}

/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */

function toString$1() {
  var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  return date.getFullYear() + '-' + padDateTime(date.getMonth() + 1) + '-' + padDateTime(date.getDate()) + 'T' + padDateTime(date.getHours()) + ':' + padDateTime(date.getMinutes()) + ':' + padDateTime(date.getSeconds());
}

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
  return sign + (j ? intPart.slice(0, j) + thousandsSeparator : '') + intPart.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSeparator) + (decimals ? clearDecimals && isInteger(value) ? '' : decPoint + Math.abs(value - +intPart).toFixed(decimals).slice(2) : '');
}
function numberRus(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return number(value, decimals, '.', ' ', true);
}

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
  return number(humanized, decimals, decPoint, thousandsSeparator) + suffix;
}

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

  return intWord(size, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimals, decPoint, thousandsSeparator, suffixSeparator);
}

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @example
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */

function defaults(origin) {
  var ln = arguments.length <= 1 ? 0 : arguments.length - 1;
  var i = 0,
      object,
      key,
      value,
      sourceKey;

  for (; i < ln; i++) {
    object = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (!isObject(object)) {
      continue;
    }

    for (key in object) {
      value = object[key];

      if (value && value.constructor === Object) {
        sourceKey = origin[key];

        if (sourceKey && sourceKey.constructor === Object) {
          defaults(sourceKey, value);
        } else {
          origin[key] = clone(value);
        }
      } else {
        if (!Object.prototype.hasOwnProperty.call(origin, key)) {
          origin[key] = value;
        }
      }
    }
  }

  return origin;
}

/**
 * Filter value by deep key in object(array)
 *
 * @example
 const scores = {
    John: 2,
    Sarah: 3,
    Janet: 1
  };

 filter(scores, ([name, score]) => score > 1);
 *
 * @param {object} object
 * @param {Function} predicate
 * @returns {object}
 */
function filter(object, predicate) {
  return Object.fromEntries(Object.entries(object).filter(predicate));
}

/**
 *
 * @param {object} object
 * @example #1
 * flip({ {A : 1, B : 2, C : 3, D : 4}) // {1 : A, 2 : B, 3 : C, 4 : D}
 */
function flip(object) {
  var result = {};

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    result[object[key]] = key;
  }

  return result;
}

var queryRe = /^\?/;
var plusRe = /\+/g;
var keyRe = /(\[):?([^\]]*)\]/g;
var nameRe = /^([^[]+)/; // eslint-disable-line no-useless-escape

/**
 * Converts a query string back into an object.
 *
 * Non-recursive:
 *
 *     fromQueryString("foo=1&bar=2"); // returns {foo: '1', bar: '2'}
 *     fromQueryString("foo=&bar=2"); // returns {foo: '', bar: '2'}
 *     fromQueryString("some%20price=%24300"); // returns {'some price': '$300'}
 *     fromQueryString("colors=red&colors=green&colors=blue"); // returns {colors: ['red', 'green', 'blue']}
 *
 * Recursive:
 *
 *     fromQueryString(
 *         "username=Jacky&"+
 *         "dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&"+
 *         "hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&"+
 *         "hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
 *
 *     // returns
 *     {
 *         username: 'Jacky',
 *         dateOfBirth: {
 *             day: '1',
 *             month: '2',
 *             year: '1911'
 *         },
 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
 *     }
 *
 * @param {String|null} queryString The query string to decode
 * @param {Boolean} [recursive=false] Whether or not to recursively decode the string. This format is supported by
 * @param {Object} options = {
 *   - decodeName {Boolean} Decode KeyNames in the queryString
 * }
 * PHP / Ruby on Rails servers and similar.
 * @return {Object}
 * @todo write tests
 */
function fromQueryString(queryString) {
  var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    decodeName: true
  };

  if (isNil(queryString)) {
    return {};
  }

  var parts = queryString.replace(queryRe, '').split('&'),
      object = Object.create(null),
      temporary,
      components,
      name,
      value,
      i,
      ln,
      part,
      j,
      subLn,
      matchedKeys,
      matchedName,
      keys,
      key,
      nextKey;

  for (i = 0, ln = parts.length; i < ln; i++) {
    part = parts[i];

    if (part.length > 0) {
      components = part.split('=');
      name = components[0];
      name = name.replace(plusRe, '%20');
      name = options.decodeName ? decodeURIComponent(name) : name;
      value = components[1];

      if (value !== undefined) {
        value = value.replace(plusRe, '%20');
        value = decodeURIComponent(value);
      } else {
        value = '';
      }

      if (!recursive) {
        if (Object.prototype.hasOwnProperty.call(object, name)) {
          if (!Array.isArray(object[name])) {
            object[name] = [object[name]];
          }

          object[name].push(value);
        } else {
          object[name] = value;
        }
      } else {
        matchedKeys = name.match(keyRe);
        matchedName = name.match(nameRe); //<debug>

        if (!matchedName) {
          throw new Error('[fromQueryString] Malformed query string given, failed parsing name from "' + part + '"');
        } //</debug>


        name = matchedName[0];
        keys = [];

        if (matchedKeys === null) {
          object[name] = value;
          continue;
        }

        for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
          key = matchedKeys[j];
          key = key.length === 2 ? '' : key.substring(1, key.length - 1);
          keys.push(key);
        }

        keys.unshift(name);
        temporary = object;

        for (j = 0, subLn = keys.length; j < subLn; j++) {
          key = keys[j];

          if (j === subLn - 1) {
            if (Array.isArray(temporary) && key === '') {
              temporary.push(value);
            } else {
              temporary[key] = value;
            }
          } else {
            if (temporary[key] === undefined || typeof temporary[key] === 'string') {
              nextKey = keys[j + 1];
              temporary[key] = isNumeric(nextKey) || nextKey === '' ? [] : {};
            }

            temporary = temporary[key];
          }
        }
      }
    }
  }

  return object;
}

/**
 * Returns count of properties of the object
 *
 * @param {object} object
 * @returns {int}
 */

function getSize(object) {
  if (!isObject(object)) {
    throw new Error('Param is not object');
  }

  var size = 0;
  var property;

  for (property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      size++;
    }
  }

  return size;
}

function logicalAnd(object) {
  for (var key in object) {
    if (object[key] === false) {
      return false;
    }
  }

  return true;
}

/**
 * Merge objects recursively
 *
 *     var js = {
 *         companyName: 'JS',
 *         products: ['JS', 'GWT', 'Designer'],
 *         isSuperCool: true,
 *         office: {
 *             size: 2000,
 *             location: 'Palo Alto',
 *             isFun: true
 *         }
 *     };
 *
 *     var newStuff = {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City'
 *         }
 *     };
 *
 *     const result = merge(js, newStuff);
 *
 *     {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         isSuperCool: true,
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City',
 *             isFun: true
 *         }
 *     }
 */

function merge(original) {
  var ln = arguments.length <= 1 ? 0 : arguments.length - 1;
  var i = 0,
      object,
      key,
      value,
      sourceKey;

  for (; i < ln; i++) {
    object = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];

    if (!isObject(object)) {
      continue;
    }

    for (key in object) {
      value = object[key];

      if (value && value.constructor === Object) {
        sourceKey = original[key];

        if (sourceKey && sourceKey.constructor === Object) {
          merge(sourceKey, value);
        } else {
          original[key] = clone(value);
        }
      } else {
        original[key] = value;
      }
    }
  }

  return original;
}

function pathToObject() {
  var paths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var divider = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  var replaceOnExist = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  if (isEmpty(paths)) {
    return object;
  }

  var pathsArray = paths.split(divider),
      pathsCount = pathsArray.length;
  var current = object;

  for (var i = 0; i < pathsCount; i++) {
    var k = pathsArray[i];

    if (isObject(current)) {
      if (isObject(current[k])) {
        if (pathsCount - 1 === i) {
          current[k] = value;
        }
      } else {
        if (current.hasOwnProperty(k) && replaceOnExist || !current.hasOwnProperty(k)) {
          current[k] = pathsCount - 1 === i ? value : {};
        }
      }
    }

    current = current[k];
  }

  return object;
}

/**
 * Get value by deep key in object(array)
 *
 * @example
 * const obj = {
        key  : 0,
        label: 'Root',
        items: {
            one: {
                key     : 1,
                label   : 'One',
                val     : 111,
                items   : {
                    two: {
                        key  : 2,
                        label: 'Two',
                        val  : 111,
                        items: {},
                    },
                },
                children: [{
                    key  : 2,
                    label: 'Two',
                    val  : 111,
                    items: {},
                }, {
                    key  : 4,
                    label: 'Four',
                    val  : 444,
                }],
            },
        },
    }

 * select(obj, 'items.one.children.1.key') // 4
 * select(obj, 'items.one.children.3.key', 0) // 0
 * select(obj, 'items/one/items/two/items',undefined,'/') // {}
 * select({key:null}, 'key') // null
 * select({key:''}, 'key') // ''
 * select({key:undefined}, 'key', '111') // undefined
 *
 * @param {object} from
 * @param {string} selector
 * @param {string} defaultValue [divider=undefined]
 * @param {string} divider [divider='.']
 * @returns {*}
 */
function select(from, selector) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  var divider = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.';
  return selector.split(divider).reduce(function (previous, current) {
    if (previous && current in previous) {
      return previous[current];
    }

    return defaultValue;
  }, from);
}

/**
 *
 * @param {object} object
 * @param {array} paths
 * @returns {object}
 *
 * @example #1
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * pick(object, ['a', 'c']); // => { 'a': 1, 'c': 3 }
 *
 * @example #2
 * var object = { d: { d: { d:1 } }, b: 2 };
 *
 * pick(object, ['d.d.d']); // => { 'd.d.d': 1 }
 *
 * @example #3
 * var object = { a: [ { id:1 }, { id:2 } ], b: 2 };
 *
 * pick(object, ['d.1.id', b]); // => { 'd.1.id': 2, b: 2 }
 */

function pick(object, paths) {
  var res = {};

  if (isEmpty(object)) {
    return res;
  }

  forEach(paths, function (v) {
    res[v] = select(object, v);
  });
  return res;
}

/**
 * Converts `value` to a number.

 * @example
 *
 * toNumber(3.2);
 * // => 3.2
 *
 * toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toNumber(Infinity);
 * // => Infinity
 *
 * toNumber('3.2');
 * // => 3.2
 */

function toNumber(value) {
  if (typeof value === 'number') {
    return value;
  }

  if (isSymbol(value)) {
    return NaN;
  }

  if (isObject(value)) {
    var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }

  if (typeof value !== 'string') {
    return value === 0 ? value : +value;
  }

  return stringToNumber(value);
}
function stringToNumber(value) {
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NaN : +value;
}
function booleanToNumber(value) {
  return +value;
}

/**
 * Get value by deep key in object(array)
 *
 * @example
 * const obj = {
        key  : 0,
        label: 'Root',
        items: {
            one: {
                key     : 1,
                label   : 'One',
                val     : 111,
                items   : {
                    two: {
                        key  : 2,
                        label: 'Two',
                        val  : 111,
                        items: {},
                    },
                },
                children: [{
                    key  : 2,
                    label: 'Two',
                    val  : 111,
                    items: {},
                }, {
                    key  : 4,
                    label: 'Four',
                    val  : 444,
                }],
            },
        },
    }

 * remove(obj, 'items.one.children.1.key')
 * remove(obj, 'items.one')
 * remove(obj, 'label')
 * remove(obj, 'items/one/items/two/items','/')
 *
 * @param {object} object
 * @param {string|array} selector
 * @param {string} divider [divider='.']
 * @returns {object}
 */

function remove(object, selector) {
  var divider = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';

  if (typeof selector === 'string') {
    selector = [selector];
  }

  var removeFromObject = function removeFromObject(from, keys) {
    if (keys.length > 1) {
      if (from[keys[0]] !== undefined) {
        if (Array.isArray(from[keys[0]]) || isObject(from[keys[0]])) {
          removeFromObject(from[keys[0]], keys.slice(1));
        }
      }
    } else {
      if (Array.isArray(from)) {
        from.splice(stringToNumber(keys[0]), 1);
      } else if (isObject(from)) {
        delete from[keys[0]];
      }
    }
  };

  if (Array.isArray(selector)) {
    selector.forEach(function (v) {
      removeFromObject(object, v.split(divider));
    });
  }

  return object;
}

/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */

function removeEmpty(object) {
  var result = {},
      key;

  for (key in object) {
    if (object.hasOwnProperty(key) && !isEmpty(object[key])) {
      if (isObject(object[key])) {
        var r = removeEmpty(object[key]);

        if (!isEmpty(r)) {
          result[key] = r;
        }

        continue;
      }

      if (Array.isArray(object[key])) {
        var _ret = function () {
          var a = [];
          object[key].forEach(function (v) {
            if (isString(v)) {
              a.push(v);
            } else {
              var _r = removeEmpty(v);

              if (!isEmpty(_r)) {
                a.push(_r);
              }
            }
          });

          if (!isEmpty(a)) {
            result[key] = a;
          }

          return "continue";
        }();

        if (_ret === "continue") continue;
      }

      result[key] = object[key];
    }
  }

  return result;
}

function sum(object) {
  var result = 0;

  for (var key in object) {
    var value = object[key];

    if (value instanceof Function) {
      value = value();
    }

    if (isNil(value) || value === false) {
      value = 0;
    }

    if (!isNumeric(value)) {
      value = 1;
    }

    result += value;
  }

  return result;
}

/**
 * Converts a `name` - `value` pair to an array of objects with support for nested structures.
 * Useful to construct query strings. For example:
 *
 *     const objects = toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
 *
 *     // objects then equals:
 *     [
 *         { name: 'hobbies', value: 'reading' },
 *         { name: 'hobbies', value: 'cooking' },
 *         { name: 'hobbies', value: 'swimming' },
 *     ];
 *
 *     const objects = toQueryObjects('dateOfBirth', {
 *         day: 3,
 *         month: 8,
 *         year: 1987,
 *         extra: {
 *             hour: 4,
 *             minute: 30,
 *         },
 *     }, true); // Recursive
 *
 *     // objects then equals:
 *     [
 *         { name: 'dateOfBirth[day]', value: 3 },
 *         { name: 'dateOfBirth[month]', value: 8 },
 *         { name: 'dateOfBirth[year]', value: 1987 },
 *         { name: 'dateOfBirth[extra][hour]', value: 4 },
 *         { name: 'dateOfBirth[extra][minute]', value: 30 },
 *     ];
 *
 * @param {String} name
 * @param {Object/Array} value
 * @param {Boolean} [recursive=false] True to traverse object recursively
 * @return {Object[]}
 * @todo write tests
 */

function toQueryObjects(name, value) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var objects = [];
  var i, ln;

  if (Array.isArray(value)) {
    var valueArray = value;

    for (i = 0, ln = valueArray.length; i < ln; i++) {
      if (recursive) {
        objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueArray[i], true));
      } else {
        objects.push({
          name: name,
          value: valueArray[i]
        });
      }
    }

    return objects;
  }

  if (isObject(value)) {
    var valueObject = value;

    for (i in value) {
      if (Object.prototype.hasOwnProperty.call(value, i)) {
        if (recursive) {
          objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueObject[i], true));
        } else {
          objects.push({
            name: name,
            value: valueObject[i]
          });
        }
      }
    }

    return objects;
  }

  objects.push({
    name: name,
    value: value
  });
  return objects;
}

/**
 * Takes an object and converts it to an encoded query string.
 *
 * Non-recursive:
 *
 *     toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
 *     toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
 *     toQueryString({'some price': '$300'}); // returns "some%20price=%24300"
 *     toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
 *     toQueryString({colors: ['red', 'green', 'blue']}); // returns "colors=red&colors=green&colors=blue"
 *
 * Recursive:
 *
 *     toQueryString({
 *         username: 'Jacky',
 *         dateOfBirth: {
 *             day: 1,
 *             month: 2,
 *             year: 1911,
 *         },
 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
 *     }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):
 *     // username=Jacky
 *     //    &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
 *     //    &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
 *
 * @param {Object} object The object to encode
 * @param {Boolean} [recursive=false] Whether or not to interpret the object in recursive format.
 * @param {Object} options = {
 *   - encodeName {Boolean} Encode each KeyName in the object
 * }
 * (PHP / Ruby on Rails servers and similar).
 * @return {String} queryString
 */
function toQueryString(object) {
  var recursive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    encodeName: true
  };
  var parameterObjects = [];
  var i, j, ln, parameterObject, value;

  for (i in object) {
    if (Object.prototype.hasOwnProperty.call(object, i)) {
      parameterObjects = parameterObjects.concat(toQueryObjects(i, object[i], recursive));
    }
  }

  var parameters = [];

  for (j = 0, ln = parameterObjects.length; j < ln; j++) {
    parameterObject = parameterObjects[j];
    value = parameterObject.value;

    if (isBoolean(value)) {
      value = booleanToNumber(value);
    } else if (isEmpty(value)) {
      value = '';
    } else if (isDate(value)) {
      value = toString$1(value);
    }

    var name = options.encodeName ? encodeURIComponent(parameterObject.name) : parameterObject.name;
    parameters.push(name + '=' + encodeURIComponent(String(value)));
  }

  return parameters.join('&');
}

/**
 * The base implementation of `values`
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} properties The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */

function baseValues(object, properties) {
  return properties.map(function (key) {
    return object[key];
  });
}
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * values('hi');
 * // => ['h', 'i']
 */


function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

/**
 *
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): (number))|*}
 */
function sortByProperty(property) {
  var asc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var ignoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (a, b) {
    var aProp = a[property];

    if (ignoreCase && isString(aProp)) {
      aProp = aProp.toUpperCase();
    }

    var bProp = b[property];

    if (ignoreCase && isString(bProp)) {
      bProp = bProp.toUpperCase();
    }

    if (aProp > bProp) {
      return asc ? 1 : -1;
    }

    if (aProp < bProp) {
      return asc ? -1 : 1;
    }

    return 0;
  };
}

/**
 * Sort object-like items into array
 *
 * @param {object|array} obj
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): number)|*}
 *
 * @example 1 array-sorting with digit keys
 *  const items = [
 *       { id: 2, title: '...', pId: 62 },
 *       { id: 1, title: '...', pId: 43 }
 *  ]
 *  sortObjectsInArrayByProperty(items, `id`)
 *  sortObjectsInArrayByProperty(items, `pId`, false) // is equal `sortDescObjectsInArrayByProperty(items, `pId`)`
 *  sortObjectsInArrayByProperty(items, `pId`, false, false) is equal `sortDescObjectsInArrayByProperty(items, `pId`, false)`
 *
 * @example 2: array-sorting with string keys
 *  const items = [
 *      { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Mo/symbols.git' },
 *      { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Zoo.git' },
 *  ]
 *  sortObjectsInArrayByProperty(items, `url`)
 *
 * @example 3: object-like-sorting with string keys
 *  const items = {
 *    name: 'list',
 *    sub1: {
 *       sub2: {
 *        sub3: {
 *          repositories: [
 *            { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Mo/symbols.git' },
 *            { type: 'vcs', url: 'ssh://git@example.com:2225/modules/Zoo.git' },
 *          ]
 *        }
 *      }
 *    }
 *  };
 *
 *  sortObjectsInArrayByProperty(items, `sub1.sub2.sub3.repositories.url`)
 *
 */

function sortObjectsInArrayByProperty(obj, property) {
  var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var ignoreCase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (!isString(property)) {
    throw new Error("key should be a String");
  }

  if (Array.isArray(obj)) {
    return obj.sort(sortByProperty(property, asc, ignoreCase));
  }

  if (!isObject(obj)) {
    throw new Error("obj should be an Object or an Array");
  }

  if (!property.includes('.')) {
    throw new Error("key's path should divided by dot (.): key1.inner-key.localKey");
  }

  var cloneObj = clone(obj);
  var keys = property.split(".");
  var sortKey = keys.pop();

  if (!sortKey) {
    throw new Error("Not found a key");
  }

  var aPath = keys.join(".");
  var a = select(cloneObj, aPath);
  var aSorted = sortObjectsInArrayByProperty(a, sortKey, asc, ignoreCase);
  return pathToObject(aPath, aSorted, cloneObj);
}
function sortDescObjectsInArrayByProperty(obj, property) {
  var ignoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return sortObjectsInArrayByProperty(obj, property, false, ignoreCase);
}

/** Used to compose unicode character classes. */
var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = "\\ufe0e\\ufe0f";
/** Used to compose unicode capture groups. */

var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = "\\ud83c[\\udffb-\\udfff]",
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsZWJ = "\\u200d";
var reHasUnicode = new RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');
/** Used to compose unicode regexes. */

var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */

var reUnicode = new RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @param {string} value The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */

function hasUnicode(value) {
  return reHasUnicode.test(value);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */

function unicodeToArray(value) {
  return value.match(reUnicode) || [];
}
/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */


function asciiToArray(value) {
  return value.split('');
}
/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} value The string to convert.
 * @returns {Array} Returns the converted array.
 */


function stringToArray(value) {
  return hasUnicode(value) ? unicodeToArray(value) : asciiToArray(value);
}

var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` and `undefined` values. The sign of `-0` is preserved.
 */

function toString(value) {
  if (Array.isArray(value)) {
    return value.toString();
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  switch (_typeof(value)) {
    case 'string':
      return value.replace(reTrim, '');

    case 'number':
      return value.toString();

    case 'object':
      return value === null ? '' : JSON.stringify(value);

    case 'boolean':
      return value.toString();
  }

  if (!value) {
    return '';
  }

  var result = value + '';
  return result === '0' && 1 / value === -Infinity ? '-0' : result;
}

/**
 * This function trim string
 *
 * @param {*} string
 * @returns {string}
 */

function trim(string) {
  string = toString(string);

  if (!string) {
    return string;
  }

  return string.replace(reTrim, '');
}

/**
 * Converts the first character of string to upper case
 *
 * @param {string} string
 * @returns {string}
 */
function upperFirst(string) {
  var stringTrim = string.trim();
  return stringTrim.charAt(0).toUpperCase() + stringTrim.slice(1).toLowerCase();
}

/**
 * Remove extra spaces from string
 *
 * @param {string} str
 * @returns {string}
 */
function clearSpaces(str) {
  return str.toString().replace(/\s+/g, ' ').trim();
}

/**
 * Converts the first character of every word into string to upper case
 *
 * @param {string} string
 * @returns {string}
 */

function titleCase(string) {
  return clearSpaces(string).replace(/\w\S*/g, function (txt) {
    return upperFirst(txt);
  });
}

/**
 * Checks if string ends with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */

function endsWith(str, target) {
  str = toString(str);
  target = toString(target);
  var position = str.length;
  var end = position;
  position -= target.length;
  return position >= 0 && str.slice(position, end) === target;
}

/**
 * Checks if string starts with the given target string
 *
 * @param {string} str
 * @param {string} target
 * @returns {boolean}
 */

function startsWith(str, target) {
  target = toString(target);
  return toString(str).slice(0, target.length) === target;
}

/**
 * Remove a prefix from a String
 *
 * @param {string} str
 * @param {string} prefix
 * @returns {string}
 */

function trimPrefix(str, prefix) {
  if (!str || !prefix || !startsWith(str, prefix)) {
    return str;
  }

  return str.substring(prefix.length);
}

/**
 * Remove a suffix from a String
 *
 * @param {string} str
 * @param {string} suffix
 * @returns {string}
 */

function trimSuffix(str, suffix) {
  if (!str || !suffix || !endsWith(str, suffix)) {
    return str;
  }

  return str.substring(0, str.length - suffix.length);
}

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
  options = _objectSpread2({
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

function pregQuote(string) {
  // Quote regular expression characters
  return string.replace(/([!$()*+.:<=>?[\\\]^{|}])/g, '\\$1');
}

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
    str = str.replace(new RegExp(pregQuote(from.charAt(index)), 'g'), to.charAt(index));
  }

  return str;
}

var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);

    _defineProperty(this, "data", []);
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(item) {
      this.data.push(item);
    }
  }, {
    key: "pull",
    value: function pull() {
      return !this.isEmpty() ? this.data.pop() : undefined;
    }
  }, {
    key: "peek",
    value: function peek() {
      return !this.isEmpty() ? this.data[this.size() - 1] : undefined;
    }
  }, {
    key: "size",
    value: function size() {
      return this.data.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.data.length === 0;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return _toConsumableArray(this.data).reverse();
    }
  }, {
    key: "toString",
    value: function toString(callback) {
      var data = this.toArray();

      if (callback && isFunction(callback)) {
        return data.map(function (item) {
          return callback(item);
        }).toString();
      }

      return data.toString();
    }
  }]);

  return Stack;
}();
new Stack();

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    _defineProperty(this, "data", []);
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(item) {
      this.data.push(item);
    }
  }, {
    key: "pull",
    value: function pull() {
      return !this.isEmpty() ? this.data.shift() : undefined;
    }
  }, {
    key: "peek",
    value: function peek() {
      return !this.isEmpty() ? this.data[0] : undefined;
    }
  }, {
    key: "size",
    value: function size() {
      return this.data.length;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.data.length === 0;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.data;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.data.length = 0;
    }
  }, {
    key: "toString",
    value: function toString(callback) {
      var data = this.toArray();

      if (callback && isFunction(callback)) {
        return data.map(function (item) {
          return callback(item);
        }).toString();
      }

      return data.toString();
    }
  }]);

  return Queue;
}();
new Queue();

/**
 * Converts `value` to a finite number.
 *
 * @example
 *
 * toFinite(3.2);
 * // => 3.2
 *
 * toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toFinite('3.2');
 * // => 3.2
 */

function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }

  value = toNumber(value);

  if (value === Infinity || value === -Infinity) {
    return value < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
  }

  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @example
 *
 * toInteger(3.2);
 * // => 3
 *
 * toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2');
 * // => 3
 */

function toInteger(value) {
  var result = toFinite(value);
  var remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1;
  var length = source.length;
  array || (array = new Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

/** Built-in value references. */

var symIterator = Symbol ? Symbol.iterator : undefined;
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */

function iteratorToArray(iterator) {
  var data;
  var result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }

  return result;
}
/**
 * Converts `value` to an array.
 *
 * @memberof µ
 * @author efureev
 *
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 *
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * toArray(1);
 * // => []
 *
 * toArray(null);
 * // => []
 */


function toArray() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (isNil(value)) {
    return [];
  }

  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }

  if (isNumeric(value) || isBoolean(value)) {
    return [value];
  }

  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }

  return values(value);
}

export { Queue, Stack, arrayEach, equals$1 as arraysEquals, bind, camelCase, clear, clearSpaces, clone, toString$1 as dateToString, defaults, difference, endsWith, equals, fileSize, filter, flip, forEach, fromQueryString, getSize, intWord, intersect, intersectAll, isAdvancedType, isArguments, isArray, isArrayLike, isArrays, isBasicType, isBlob, isBlobs, isBoolean, isBooleans, isBuffer, isDate, isEmpty, isEmptyObject, isEven, isEvens, isFloat, isFloatCanonical, isFloats, isFunction, isFunctions, isInteger, isIntegers, isLength, isNil, isNils, isNull, isNulls, isNumeric, isNumerics, isObject, isObjectLike, isObjects, isPrototype, isString, isStrings, isSymbol, isTypedArray, keys, logicalAnd, match, merge, now, number, numberRus, equal as objectsEqual, pad, padDateTime, padEnd, padNumber, padStart, pascalCase, pathToObject, pick, pregQuote, random, remove, removeEmpty, replaceByTemplate, root, select, sortByProperty, sortDescObjectsInArrayByProperty, sortObjectsInArrayByProperty, startsWith, stringToArray, strtr, sum, symmetricalDifference, tap, times, titleCase, toArray, toFinite, toInteger, toNumber, toQueryObjects, toQueryString, toString, trim, trimPrefix, trimSuffix, upperFirst, values };
//# sourceMappingURL=bundle.esm.js.map

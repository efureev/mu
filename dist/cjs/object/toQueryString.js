"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toQueryString;

var _is = require("../is");

var _toQueryObjects = _interopRequireDefault(require("./toQueryObjects"));

var _date = require("../date");

var _toNumber = _interopRequireDefault(require("../to/toNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      parameterObjects = parameterObjects.concat((0, _toQueryObjects.default)(i, object[i], recursive));
    }
  }

  var parameters = [];

  for (j = 0, ln = parameterObjects.length; j < ln; j++) {
    parameterObject = parameterObjects[j];
    value = parameterObject.value;

    if ((0, _is.isBoolean)(value)) {
      value = (0, _toNumber.default)(value);
    } else if ((0, _is.isEmpty)(value)) {
      value = '';
    } else if ((0, _is.isDate)(value)) {
      value = (0, _date.dateToString)(value);
    }

    var name = options.encodeName ? encodeURIComponent(parameterObject.name) : parameterObject.name;
    parameters.push(name + '=' + encodeURIComponent(String(value)));
  }

  return parameters.join('&');
}
//# sourceMappingURL=toQueryString.js.map
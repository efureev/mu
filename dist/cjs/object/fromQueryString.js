"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fromQueryString;

var _is = require("../is");

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

  if ((0, _is.isNil)(queryString)) {
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
          if (!(0, _is.isArray)(object[name])) {
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
            if ((0, _is.isArray)(temporary) && key === '') {
              temporary.push(value);
            } else {
              temporary[key] = value;
            }
          } else {
            if (temporary[key] === undefined || typeof temporary[key] === 'string') {
              nextKey = keys[j + 1];
              temporary[key] = (0, _is.isNumeric)(nextKey) || nextKey === '' ? [] : {};
            }

            temporary = temporary[key];
          }
        }
      }
    }
  }

  return object;
}
//# sourceMappingURL=fromQueryString.js.map
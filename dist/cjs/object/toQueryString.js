"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = toQueryString;
const isBoolean_1 = __importDefault(require("../is/isBoolean"));
const isDate_1 = __importDefault(require("../is/isDate"));
const isEmpty_1 = __importDefault(require("../is/isEmpty"));
const toQueryObjects_1 = __importDefault(require("./toQueryObjects"));
const toString_1 = __importDefault(require("../date/toString"));
const toNumber_1 = require("../to/toNumber");
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
function toQueryString(object, recursive = false, options = { encodeName: true }) {
    let parameterObjects = [];
    let i, j, ln, parameterObject, value;
    for (i in object) {
        if (Object.prototype.hasOwnProperty.call(object, i)) {
            parameterObjects = parameterObjects.concat((0, toQueryObjects_1.default)(i, object[i], recursive));
        }
    }
    const parameters = [];
    for (j = 0, ln = parameterObjects.length; j < ln; j++) {
        parameterObject = parameterObjects[j];
        value = parameterObject.value;
        if ((0, isBoolean_1.default)(value)) {
            value = (0, toNumber_1.booleanToNumber)(value);
        }
        else if ((0, isEmpty_1.default)(value)) {
            value = '';
        }
        else if ((0, isDate_1.default)(value)) {
            value = (0, toString_1.default)(value);
        }
        const name = options.encodeName ? encodeURIComponent(parameterObject.name) : parameterObject.name;
        parameters.push(name + '=' + encodeURIComponent(String(value)));
    }
    return parameters.join('&');
}
//# sourceMappingURL=toQueryString.js.map
import isBoolean from '../is/isBoolean';
import isDate from '../is/isDate';
import isEmpty from '../is/isEmpty';
import toQueryObjects from './toQueryObjects.mjs';
import dateToString from '../date/toString';
import { booleanToNumber } from '../to/toNumber';
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
export default function toQueryString(object, recursive = false, options = { encodeName: true }) {
    let parameterObjects = [];
    let i, j, ln, parameterObject, value;
    for (i in object) {
        if (Object.prototype.hasOwnProperty.call(object, i)) {
            parameterObjects = parameterObjects.concat(toQueryObjects(i, object[i], recursive));
        }
    }
    const parameters = [];
    for (j = 0, ln = parameterObjects.length; j < ln; j++) {
        parameterObject = parameterObjects[j];
        value = parameterObject.value;
        if (isBoolean(value)) {
            value = booleanToNumber(value);
        }
        else if (isEmpty(value)) {
            value = '';
        }
        else if (isDate(value)) {
            value = dateToString(value);
        }
        const name = options.encodeName ? encodeURIComponent(parameterObject.name) : parameterObject.name;
        parameters.push(name + '=' + encodeURIComponent(String(value)));
    }
    return parameters.join('&');
}
//# sourceMappingURL=toQueryString.mjs.map
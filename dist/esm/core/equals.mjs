import objectsEqual from '../object/equals.mjs';
import arraysEquals from '../array/equals.mjs';
import isObject from '../is/isObject.mjs';
import isString from '../is/isString.mjs';
import isBoolean from '../is/isBoolean.mjs';
import isNumeric from '../is/isNumeric.mjs';
import isFunction from '../is/isFunction.mjs';
/**
 * @param {*} first
 * @param {*} second
 * @returns {boolean}
 */
export default function equals(first, second) {
    if (first === second) {
        return true;
    }
    if (isString(first) || isNumeric(first) || isBoolean(first)) {
        return first === second;
    }
    if ((first instanceof Date && second instanceof Date) || (first instanceof RegExp && second instanceof RegExp)) {
        return first.toString() === second.toString();
    }
    if (Array.isArray(first) && Array.isArray(second)) {
        return arraysEquals(first, second);
    }
    if (isObject(first) && isObject(second)) {
        return objectsEqual(first, second);
    }
    if (isFunction(first) && isFunction(second)) {
        return ('' + first).valueOf() === ('' + second).valueOf();
    }
    return false;
}
//# sourceMappingURL=equals.mjs.map
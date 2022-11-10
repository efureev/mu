/**
 *
 * @param {string} property
 * @param {boolean} asc
 * @param {boolean} ignoreCase
 * @return {(function(*, *): (number))|*}
 */
import isString from '../is/isString';
export default function sortByProperty(property, asc = true, ignoreCase = true) {
    return function (a, b) {
        let aProp = a[property];
        if (ignoreCase && isString(aProp)) {
            aProp = aProp.toUpperCase();
        }
        let bProp = b[property];
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
//# sourceMappingURL=sortByProperty.js.map
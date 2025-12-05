import isObject from '../is/isObject.mjs';
import isString from '../is/isString.mjs';
import isEmpty from '../is/isEmpty.mjs';
/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */
export default function removeEmpty(object) {
    const result = {};
    for (const [key, value] of Object.entries(object)) {
        if (isEmpty(value)) {
            continue;
        }
        // Сначала массивы, затем plain-объекты
        if (Array.isArray(value)) {
            const a = [];
            for (const v of value) {
                if (isString(v)) {
                    a.push(v);
                }
                else {
                    const r = removeEmpty(v);
                    if (!isEmpty(r)) {
                        a.push(r);
                    }
                }
            }
            if (!isEmpty(a)) {
                result[key] = a;
            }
            continue;
        }
        if (isObject(value)) {
            const r = removeEmpty(value);
            if (!isEmpty(r)) {
                result[key] = r;
            }
            continue;
        }
        result[key] = value;
    }
    return result;
}
//# sourceMappingURL=removeEmpty.mjs.map
import clone from '../core/clone.mjs';
import isObject from '../is/isObject.mjs';
// Узкое определение plain object без опоры на constructor
function isPlainObject(val) {
    if (!isObject(val))
        return false;
    const proto = Object.getPrototypeOf(val);
    return proto === Object.prototype || proto === null;
}
/**
 * Merge objects recursively
 */
export default function merge(original, ...values) {
    for (let i = 0; i < values.length; i++) {
        const object = values[i];
        if (!isObject(object)) {
            continue;
        }
        for (const key in object) {
            if (!Object.prototype.hasOwnProperty.call(object, key))
                continue;
            const value = object[key];
            const target = original[key];
            // Массивы: перезаписываем клоном (предсказуемее, чем неявные стратегии)
            if (Array.isArray(value)) {
                ;
                original[key] = clone(value);
                continue;
            }
            if (isPlainObject(value)) {
                if (isPlainObject(target)) {
                    merge(target, value);
                }
                else {
                    ;
                    original[key] = clone(value);
                }
            }
            else {
                ;
                original[key] = value;
            }
        }
    }
    return original;
}
//# sourceMappingURL=merge.mjs.map
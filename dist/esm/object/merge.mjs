import clone from '../core/clone.mjs';
import isObject from '../is/isObject.mjs';
export default function merge(original, ...values) {
    const ln = values.length;
    let i = 0, object, key, value, sourceKey;
    for (; i < ln; i++) {
        object = values[i];
        if (!isObject(object)) {
            continue;
        }
        for (key in object) {
            value = object[key];
            if (value && value.constructor === Object) {
                sourceKey = original[key];
                if (sourceKey && sourceKey.constructor === Object) {
                    merge(sourceKey, value);
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
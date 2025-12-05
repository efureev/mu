import root from './root.mjs';
// Prefer explicit, descriptive names for built-in references.
const TO_STRING_TAG = root?.Symbol ? root.Symbol.toStringTag : undefined;
const objectPrototype = Object.prototype;
const hasOwn = objectPrototype.hasOwnProperty;
const objectToString = objectPrototype.toString;
// Small, focused helper improves readability and reuse.
function isObjectLike(value) {
    return value !== null && (typeof value === 'object' || typeof value === 'function');
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
export default function getRawTag(value) {
    // Fast path: if no Symbol.toStringTag support or non-object, use default toString.
    if (!TO_STRING_TAG || !isObjectLike(value)) {
        return objectToString.call(value);
    }
    const obj = value;
    const isOwn = hasOwn.call(obj, TO_STRING_TAG);
    const previousTag = obj[TO_STRING_TAG];
    let masked = false;
    try {
        obj[TO_STRING_TAG] = undefined;
        masked = true;
    }
    catch {
        // Swallow errors from non-writable properties; fall through to toString.
    }
    const result = objectToString.call(obj);
    // Restore original state only if we managed to mask it.
    if (masked) {
        if (isOwn) {
            obj[TO_STRING_TAG] = previousTag;
        }
        else {
            delete obj[TO_STRING_TAG];
        }
    }
    return result;
}
//# sourceMappingURL=getRawTag.mjs.map
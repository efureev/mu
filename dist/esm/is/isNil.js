/**
 * This function evaluates whether all parameters are null
 */
export function isNulls(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isNull.');
    }
    return !parameters.some(parameter => !isNull(parameter));
}
export function isNils(...parameters) {
    if (parameters.length === 0) {
        throw new Error('Please provide at least one param to evaluate isNull.');
    }
    return !parameters.some(parameter => !isNil(parameter));
}
export default function isNil(value) {
    return value == null;
}
export function isNull(value) {
    return value === null;
}
//# sourceMappingURL=isNil.js.map
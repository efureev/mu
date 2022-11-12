export default function isBoolean(value) {
    return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]';
}
export function isBooleans(...parameters) {
    return !parameters.some(parameter => !isBoolean(parameter));
}
//# sourceMappingURL=isBoolean.mjs.map
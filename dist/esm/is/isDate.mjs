/**
 * This function evaluates if all the parameters are dates
 *
 * @param {...*} parameters - One or more parameters.
 */
export function isDates(...parameters) {
    return !parameters.some(parameter => !isDate(parameter));
}
export default function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
//# sourceMappingURL=isDate.mjs.map
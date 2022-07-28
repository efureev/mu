/**
 * This function evaluates if all the parameters are strings
 */
export function isStrings(...parameters) {
  return !parameters.some(parameter => !isString(parameter));
}
export default function isString(value) {
  return typeof value === 'string';
}
//# sourceMappingURL=isString.js.map
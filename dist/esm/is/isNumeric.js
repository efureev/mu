import isArray from './isArray';
/**
 * This function evaluates if all the parameters are Numeric
 */

export default function isNumeric(value) {
  return !(isArray(value) || isNaN(parseFloat(value)) || !isFinite(value));
}
export function isNumerics(...parameters) {
  const invalid = parameters.some(parameter => !isNumeric(parameter));
  return !invalid;
}
//# sourceMappingURL=isNumeric.js.map
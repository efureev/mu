/**
 * This function evaluates whether all parameters are arrays
 */
export default function isArray(value) {
  return Array.isArray(value);
}
export function isArrays(...parameters) {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isArray.');
  }

  return !parameters.some(parameter => !isArray(parameter));
}
//# sourceMappingURL=isArray.js.map
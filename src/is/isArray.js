/**
 * This function evaluates whether all parameters are array
 *
 * @param {...*} parameters - One or more parameters.
 */
export default function isArray(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one param to evaluate isArray.')

  return !parameters.some((parameter) => !Array.isArray(parameter))
}

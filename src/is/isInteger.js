/**
 * This function evaluates whether all parameters are integers
 * @memberof µ.is
 * @author efureev
 * @param {...*} parameters - One or more parameters.
 */
export default function isInteger(...parameters) {
  if (parameters.length === 0) throw new Error('Please provide at least one number to evaluate isInteger.')
  if (parameters.some((parameter) => Number.isNaN(Number.parseFloat(parameter))))
    throw new Error('Please provide all numbers to evaluate isInteger.')

  return !parameters.some((parameter) => !Number.isInteger(Number.parseFloat(parameter)))
}

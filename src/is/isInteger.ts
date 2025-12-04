/**
 * Checks whether a single value is an integer.
 * Accepts numbers and numeric strings; other types return `false`.
 */
export default function isInteger(value: any): boolean {
  return Number.isInteger(Number.parseFloat(value))
}

/**
 * Variadic version: returns `true` if all provided values are integers.
 * Throws when called without arguments or if any argument cannot be parsed as a number.
 */
export function isIntegers(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.')
  }

  if (parameters.some(parameter => Number.isNaN(Number.parseFloat(parameter)))) {
    throw new Error('Please provide all numbers to evaluate isInteger.')
  }

  return !parameters.some(parameter => !isInteger(parameter))
}

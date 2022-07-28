/**
 * This function evaluates whether all parameters are integers
 */
export default function isInteger(value: any): boolean {
  return Number.isInteger(Number.parseFloat(value))
}

export function isIntegers(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one number to evaluate isInteger.')
  }

  if (parameters.some(parameter => Number.isNaN(Number.parseFloat(parameter)))) {
    throw new Error('Please provide all numbers to evaluate isInteger.')
  }

  return !parameters.some(parameter => !isInteger(parameter))
}

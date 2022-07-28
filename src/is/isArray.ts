/**
 * This function evaluates whether all parameters are arrays
 */
export default function isArray(value: any): boolean {
  return Array.isArray(value)
}

export function isArrays(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isArray.')
  }

  return !parameters.some(parameter => !isArray(parameter))
}

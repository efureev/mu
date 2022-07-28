/**
 * This function evaluates whether all parameters are null
 */
export function isNulls(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isNull.')
  }

  return !parameters.some(parameter => !isNull(parameter))
}

export function isNils(...parameters: any[]): boolean {
  if (parameters.length === 0) {
    throw new Error('Please provide at least one param to evaluate isNull.')
  }

  return !parameters.some(parameter => !isNil(parameter))
}

export default function isNil(value: any): boolean {
  return value == null
}

export function isNull(value: any): boolean {
  return value === null
}

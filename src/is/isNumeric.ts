/**
 * This function evaluates if all the parameters are Numeric
 */
export default function isNumeric(value: any): boolean {
  return !(Array.isArray(value) || isNaN(parseFloat(value)) || !isFinite(value))
}

export function isNumerics(...parameters: any[]): boolean {
  const invalid = parameters.some(parameter => !isNumeric(parameter))

  return !invalid
}

/**
 * Checks whether the given string is blank (empty or whitespace-only).
 * Non-strings always return false.
 */
export default function isBlank(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length === 0
}

/**
 * Variadic version: returns true if all provided arguments are blank strings.
 */
export function isBlanks(...values: unknown[]): boolean {
  return !values.some(v => !isBlank(v))
}

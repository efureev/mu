/**
 * Checks whether the given value is a finite number or a numeric string.
 *
 * Rules:
 * - Numbers: `Number.isFinite(value)`
 * - Strings: trimmed, non-empty strings that convert to a finite number via `Number()`
 * - Everything else: false
 */
export default function isNumeric(value: any): boolean {
  if (typeof value === 'number') return Number.isFinite(value)
  if (typeof value === 'string') {
    const s = value.trim()
    if (s.length === 0) {
      return false
    }

    const n = Number(s)
    return Number.isFinite(n)
  }

  return false
}

export function isNumerics(...parameters: any[]): boolean {
  return !parameters.some(parameter => !isNumeric(parameter))
}

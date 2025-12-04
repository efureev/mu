export default function isEven(value: any): boolean {
  // Accept only numbers or numeric strings
  let n: number | null = null
  if (typeof value === 'number') {
    n = value
  } else if (typeof value === 'string') {
    const s = value.trim()
    if (s.length === 0) return false
    const parsed = Number(s)
    if (!Number.isFinite(parsed)) return false
    n = parsed
  } else {
    return false
  }

  return n % 2 === 0
}

/**
 * This function evaluates whether all parameters are evens
 */
export function isEvens(...parameters: any[]): boolean {
  for (const parameter of parameters) {
    if (!isEven(parameter)) {
      return false
    }
  }
  return true
}

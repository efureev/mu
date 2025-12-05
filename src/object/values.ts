/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 * Falls back to empty array for null/undefined.
 */
export default function values(object?: any): any[] {
  if (object == null) return []
  return Object.values(Object(object))
}

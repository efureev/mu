export default function logicalAnd(object: Record<PropertyKey, any>): boolean {
  for (const key in object) {
    if (object[key] === false) {
      return false
    }
  }

  return true
}

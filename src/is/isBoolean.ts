export default function isBoolean(value: any): boolean {
  return value === true || value === false || Object.prototype.toString.call(value) === '[object Boolean]'
}

export function isBooleans(...parameters: any[]): boolean {
  return !parameters.some(parameter => !isBoolean(parameter))
}

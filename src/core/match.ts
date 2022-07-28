interface casesObjectType extends Record<PropertyKey, any> {
  default?: any
}

type casesType = casesObjectType | [() => PropertyKey, any][]

/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {boolean} strict Strict comparison (===) or (==). For example, it should be used for digit case-keys.
 * @return {*}
 */
export default function match(expr: any, cases: casesType, strict: boolean = true): any {
  for (const [pattern, action] of Array.isArray(cases) ? cases : Object.entries(cases)) {
    const prn = typeof pattern === 'function' ? pattern() : pattern

    if (strict ? expr === prn : expr == prn) {
      return typeof action === 'function' ? action() : action
    }
  }

  return Array.isArray(cases) ? undefined : cases.default
}

import isObject from '~/is/isObject'

interface casesObjectType extends Record<PropertyKey, any> {}

type casesType = casesObjectType | [() => PropertyKey, any][]

type matchOptions = {
  strict?: boolean
  default?: any
}

/**
 * @param {*} expr
 * @param {object|array} cases
 * @param {matchOptions} options
 * @return {*}
 */
export default function match(expr: any, cases: casesType, options?: matchOptions): any {
  const opt = {
    strict: true,
    ...(isObject(options) ? options : {}),
  }

  for (const [pattern, action] of Array.isArray(cases) ? cases : Object.entries(cases)) {
    const prn = typeof pattern === 'function' ? pattern() : pattern

    if (opt.strict ? expr === prn : expr == prn) {
      return typeof action === 'function' ? action() : action
    }
  }

  return typeof opt.default === 'function' ? opt.default() : opt.default
}

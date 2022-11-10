/**
 * This method invokes `interceptor` and returns `value`. The interceptor
 * is invoked with one argument; (value). The purpose of this method is to
 * "tap into" a method chain sequence in order to modify intermediate results.
 *
 * @static
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 * @example
 *
 * tap('test') // 'test'
 * tap([1, 2, 3], (value) => value.pop()) // [1,2]
 * tap({b: 2, a: 'test'}, (value) => delete value.a) // {b: 2}
 * tap(()=>100)) // 100
 * tap(()=>100), (value) => value / 2) // 50
 *
 */
import isFunction from '~/is/isFunction'
import isBasicType from '~/is/isBasicType'

export default function tap(value: any, interceptor?: Function) {
  if (isFunction(value)) {
    value = value()
  }

  if (interceptor && isFunction(interceptor)) {
    if (isBasicType(value)) {
      return interceptor(value)
    }

    interceptor(value)
  }

  return value
}

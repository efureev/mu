/**
 * Converts `array` to an `arguments` object.
 *
 * @private
 * @param {Array} array The array to convert.
 * @returns {Object} Returns the converted `arguments` object.
 */
function toArgs(array) {
  return function () {
    return arguments
  }.apply(undefined, array)
}

/*--------------------------------------------------------------------------*/

export const stubTrue = () => true
export const stubFalse = () => false

/** Used to provide falsey values to methods. */
export const falsey = [, null, undefined, false, 0, NaN, '']

/** Used to specify the emoji style glyph variant of characters. */
export const emojiVar = '\ufe0f'

/** Used to provide empty values to methods. */
export const empties = [[], {}].concat(falsey.slice(1))

/** Used to test error objects. */
export const errors = [
  new Error(),
  new EvalError(),
  new RangeError(),
  new ReferenceError(),
  new SyntaxError(),
  new TypeError(),
  new URIError(),
]

/** Used to provide primitive values to methods. */
export const primitives = [null, undefined, false, true, 1, NaN, 'a']

/** Used to check whether methods support typed arrays. */
export const typedArrays = [
  'Float32Array',
  'Float64Array',
  'Int8Array',
  'Int16Array',
  'Int32Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Uint16Array',
  'Uint32Array',
]

export const arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype,
  numberProto = Number.prototype,
  stringProto = String.prototype

export const slice = arrayProto.slice,
  args = toArgs([1, 2, 3]),
  strictArgs = (function () {
    'use strict'
    return arguments
    // @ts-ignore
  })(1, 2, 3),
  realm = {},
  objToString = objectProto.toString,
  noop = () => {}

export const symbol = Symbol ? Symbol('a') : undefined
export const Inf = 1.7976931348623157e308
export const NegInf = -1.7976931348623157e308

import isArray from '../is/isArray.js'
import arrayEach from '../array/arrayEach.js'
import createBaseEach from '../internal/createBaseEach.js'
import createBaseFor from '../internal/createBaseFor.js'
import keys from './keys.js'

export default function forEach(collection, iteratee) {
  const func = isArray(collection)
    ? arrayEach
    : createBaseEach((object, iteratee) => {
        return object && createBaseFor()(object, iteratee, keys)
      })
  return func(collection, iteratee)
}

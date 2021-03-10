import isArray from '../is/isArray'
import arrayEach from '../array/arrayEach'
import createBaseEach from '../internal/createBaseEach'
import createBaseFor from '../internal/createBaseFor'
import keys from './keys'

export default function forEach(collection, iteratee) {
  const func = isArray(collection)
    ? arrayEach
    : createBaseEach((object, iteratee) => {
        return object && createBaseFor()(object, iteratee, keys)
      })
  return func(collection, iteratee)
}

import arrayEach from '../array/arrayEach'
import keys from './keys'

import { CollectionType } from '../internal/types'
import isArrayLike from '../is/isArrayLike'

export default function forEach(collection: CollectionType, iterateFn: ObjectEachCallback) {
  if (Array.isArray(collection)) {
    return arrayEach(<any[]>collection, iterateFn)
  }

  const baseEach = (object: ObjType, iterateFn: ObjectEachCallback): ObjType => {
    return object && createBaseFor()(object, iterateFn, keys)
  }

  const func = createBaseEach(baseEach)

  return func(<Record<PropertyKey, any>>collection, iterateFn)
}

type ObjType = Record<string | number, any>
type ObjectEachCallback = (value: any, index: PropertyKey, array: ObjType) => boolean | void

type KeysFuncType = (o: ObjType) => string[]
type EachFnType = (o: ObjType, eachFn: ObjectEachCallback, keysFn: KeysFuncType) => ObjType

function createBaseFor(fromRight: boolean = false): EachFnType {
  return function (object: ObjType, iterateFn: ObjectEachCallback, keysFunc: KeysFuncType): ObjType {
    let index = -1,
      iterable: ObjType = new Object(object),
      properties = keysFunc(object),
      length: number = properties.length,
      key: PropertyKey

    while (length--) {
      key = properties[fromRight ? length : ++index]
      if (iterateFn(iterable[key], key, iterable) === false) {
        break
      }
    }

    return object
  }
}

type EachFuncType = (collection: ObjType, iterateFn: ObjectEachCallback) => ObjType

function createBaseEach(eachFunc: EachFuncType, fromRight: boolean = false) {
  return function (collection: Record<PropertyKey, any>, iterateFn: ObjectEachCallback): ObjType {
    if (collection == null) {
      return collection
    }

    if (!isArrayLike(collection)) {
      return eachFunc(collection, iterateFn)
    }

    const length = collection.length
    const iterable: ObjType = new Object(collection)

    let index = fromRight ? length : -1

    while (fromRight ? index-- : ++index < length) {
      if (iterateFn(iterable[index], index, iterable) === false) {
        break
      }
    }
    return collection
  }
}

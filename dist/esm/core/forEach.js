import isArray from '../is/isArray';
import arrayEach from '../array/arrayEach';
import keys from './keys';
import isArrayLike from '../is/isArrayLike';
export default function forEach(collection, iterateFn) {
  if (isArray(collection)) {
    return arrayEach(collection, iterateFn);
  }

  const baseEach = (object, iterateFn) => {
    return object && createBaseFor()(object, iterateFn, keys);
  };

  const func = createBaseEach(baseEach);
  return func(collection, iterateFn);
}

function createBaseFor(fromRight = false) {
  return function (object, iterateFn, keysFunc) {
    let index = -1,
        iterable = new Object(object),
        properties = keysFunc(object),
        length = properties.length,
        key;

    while (length--) {
      key = properties[fromRight ? length : ++index];

      if (iterateFn(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

function createBaseEach(eachFunc, fromRight = false) {
  return function (collection, iterateFn) {
    if (collection == null) {
      return collection;
    }

    if (!isArrayLike(collection)) {
      return eachFunc(collection, iterateFn);
    }

    const length = collection.length;
    const iterable = new Object(collection);
    let index = fromRight ? length : -1;

    while (fromRight ? index-- : ++index < length) {
      if (iterateFn(iterable[index], index, iterable) === false) {
        break;
      }
    }

    return collection;
  };
}
//# sourceMappingURL=forEach.js.map
import clone from '../core/clone';
import isObject from '../is/isObject';
/**
 * Merge objects recursively
 *
 *     var js = {
 *         companyName: 'JS',
 *         products: ['JS', 'GWT', 'Designer'],
 *         isSuperCool: true,
 *         office: {
 *             size: 2000,
 *             location: 'Palo Alto',
 *             isFun: true
 *         }
 *     };
 *
 *     var newStuff = {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City'
 *         }
 *     };
 *
 *     const result = merge(js, newStuff);
 *
 *     {
 *         companyName: 'Jacksonville',
 *         products: ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
 *         isSuperCool: true,
 *         office: {
 *             size: 40000,
 *             location: 'Redwood City',
 *             isFun: true
 *         }
 *     }
 */

export default function merge(original, ...values) {
  const ln = values.length;
  let i = 0,
      object,
      key,
      value,
      sourceKey;

  for (; i < ln; i++) {
    object = values[i];

    if (!isObject(object)) {
      continue;
    }

    for (key in object) {
      value = object[key];

      if (value && value.constructor === Object) {
        sourceKey = original[key];

        if (sourceKey && sourceKey.constructor === Object) {
          merge(sourceKey, value);
        } else {
          ;
          original[key] = clone(value);
        }
      } else {
        ;
        original[key] = value;
      }
    }
  }

  return original;
}
//# sourceMappingURL=merge.js.map
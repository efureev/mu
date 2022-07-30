import isObject from '../is/isObject';
import isString from '../is/isString';
import isEmpty from '../is/isEmpty';
/**
 * Remove all empty values in object
 *
 * @param {{}} object
 * @return {{}}
 */

export default function removeEmpty(object) {
  let result = {},
      key;

  for (key in object) {
    if (object.hasOwnProperty(key) && !isEmpty(object[key])) {
      if (isObject(object[key])) {
        const r = removeEmpty(object[key]);

        if (!isEmpty(r)) {
          result[key] = r;
        }

        continue;
      }

      if (Array.isArray(object[key])) {
        const a = [];
        object[key].forEach(v => {
          if (isString(v)) {
            a.push(v);
          } else {
            const r = removeEmpty(v);

            if (!isEmpty(r)) {
              a.push(r);
            }
          }
        });

        if (!isEmpty(a)) {
          result[key] = a;
        }

        continue;
      }

      result[key] = object[key];
    }
  }

  return result;
}
//# sourceMappingURL=removeEmpty.js.map
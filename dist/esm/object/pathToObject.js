import { isEmpty, isObject } from '../is';
export default function pathToObject(paths = '', value = null, object = {}, divider = '.', replaceOnExist = true) {
  if (isEmpty(paths)) {
    return object;
  }

  const pathsArray = paths.split(divider),
        pathsCount = pathsArray.length;
  let current = object;

  for (let i = 0; i < pathsCount; i++) {
    const k = pathsArray[i];

    if (isObject(current)) {
      if (isObject(current[k])) {
        if (pathsCount - 1 === i) {
          current[k] = value;
        }
      } else {
        if (current.hasOwnProperty(k) && replaceOnExist || !current.hasOwnProperty(k)) {
          current[k] = pathsCount - 1 === i ? value : {};
        }
      }
    }

    current = current[k];
  }

  return object;
}
//# sourceMappingURL=pathToObject.js.map
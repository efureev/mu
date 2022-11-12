import isObject from '../is/isObject';
export default function toQueryObjects(name, value, recursive = false) {
    let objects = [];
    let i, ln;
    if (Array.isArray(value)) {
        const valueArray = value;
        for (i = 0, ln = valueArray.length; i < ln; i++) {
            if (recursive) {
                objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueArray[i], true));
            }
            else {
                objects.push({
                    name: name,
                    value: valueArray[i],
                });
            }
        }
        return objects;
    }
    if (isObject(value)) {
        const valueObject = value;
        for (i in value) {
            if (Object.prototype.hasOwnProperty.call(value, i)) {
                if (recursive) {
                    objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueObject[i], true));
                }
                else {
                    objects.push({
                        name: name,
                        value: valueObject[i],
                    });
                }
            }
        }
        return objects;
    }
    objects.push({
        name: name,
        value: value,
    });
    return objects;
}
//# sourceMappingURL=toQueryObjects.mjs.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toQueryObjects;

var _is = require("./../is");

function toQueryObjects(name, value) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var objects = [];
  var i, ln;

  if ((0, _is.isArray)(value)) {
    var valueArray = value;

    for (i = 0, ln = valueArray.length; i < ln; i++) {
      if (recursive) {
        objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueArray[i], true));
      } else {
        objects.push({
          name: name,
          value: valueArray[i]
        });
      }
    }

    return objects;
  }

  if ((0, _is.isObject)(value)) {
    var valueObject = value;

    for (i in value) {
      if (Object.prototype.hasOwnProperty.call(value, i)) {
        if (recursive) {
          objects = objects.concat(toQueryObjects(name + '[' + i + ']', valueObject[i], true));
        } else {
          objects.push({
            name: name,
            value: valueObject[i]
          });
        }
      }
    }

    return objects;
  }

  objects.push({
    name: name,
    value: value
  });
  return objects;
}
//# sourceMappingURL=toQueryObjects.js.map
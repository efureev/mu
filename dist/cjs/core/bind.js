"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bind;
/**
 * Binding Methods to Objects
 *
 * @example
 *  const obj = {
 *    msg: 'Name is',
 *    buildMessage: (name) =>this.msg + ' ' + name
 *  }
 *  g = bind(obj, obj.buildMessage);
 *  alert(g('Smith')); // displays: Name is Smith
 */
function bind(object, method) {
    return function () {
        return method.apply(object, arguments);
    };
}
//# sourceMappingURL=bind.js.map
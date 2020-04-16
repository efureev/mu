/**
 * Binding Methods to Objects
 *
 * @param {Object} object
 * @param {Function} method
 * @return {function(): *}
 *
 * @example
 *  const obj = {
 *    msg: 'Name is',
 *    buildMessage: (name) =>this.msg + ' ' + name
 *  }
 *  g = bind(obj, obj.buildMessage);
 *  alert(g('Smith')); // displays: Name is Smith
 */
export default function bind(object, method) {
  return function () {
    return method.apply(object, arguments)
  }
}

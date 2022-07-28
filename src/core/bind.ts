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
export default function bind(object: Object, method: Function): any {
  return function () {
    return method.apply(object, arguments)
  }
}

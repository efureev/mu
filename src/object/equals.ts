/**
 * Compares the contents of 2 or more objects using strict equality.
 */
import isObject from '~/is/isObject'

export default function equal(origin: Record<PropertyKey, any>, ...list: Record<PropertyKey, any>[]): boolean {
  let i: number, l: number
  let leftVisited: Set<any>, rightVisited: Set<any>

  if (!isObject(origin) || list.length === 0) {
    throw new Error('Need two or more arguments to compare')
  }

  function compare2Objects(x: any, y: any): boolean {
    // Быстрая проверка NaN
    if (typeof x === 'number' && typeof y === 'number' && Number.isNaN(x) && Number.isNaN(y)) {
      return true
    }

    // Базовое строгое равенство и кейсы для встроенных типов
    if (x === y) {
      return true
    }

    if (
      (typeof x === 'function' && typeof y === 'function') ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString()
    }

    // Должны быть объектами дальше
    if (!(x instanceof Object && y instanceof Object)) {
      return false
    }

    // Прототипы/конструкторы
    if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
      return false
    }
    if (x.constructor !== y.constructor) {
      return false
    }

    // Проверка на циклические ссылки
    if (leftVisited.has(x) || rightVisited.has(y)) {
      return false
    }

    // Быстрая проверка количества ключей (собственных)
    const xKeys = Object.keys(x)
    const yKeys = Object.keys(y)
    if (xKeys.length !== yKeys.length) {
      return false
    }

    // Сопоставление ключей по типам значений (дополнительно)
    for (let k = 0; k < yKeys.length; k++) {
      const p = yKeys[k]
      if (!Object.prototype.hasOwnProperty.call(x, p)) {
        return false
      }
      if (typeof y[p] !== typeof x[p]) {
        return false
      }
    }

    // Глубокое сравнение
    leftVisited.add(x)
    rightVisited.add(y)

    for (let k = 0; k < xKeys.length; k++) {
      const p = xKeys[k]
      const xv = x[p]
      const yv = y[p]

      const t = typeof xv
      if (t === 'object' || t === 'function') {
        if (!compare2Objects(xv, yv)) {
          return false
        }
      } else {
        if (xv !== yv) {
          return false
        }
      }
    }

    leftVisited.delete(x)
    rightVisited.delete(y)
    return true
  }

  for (i = 0, l = list.length; i < l; i++) {
    leftVisited = new Set()
    rightVisited = new Set()

    if (!compare2Objects(origin, list[i])) {
      return false
    }
  }

  return true
}

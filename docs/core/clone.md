# clone

> <small>CORE</small>

## Description

Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference.

Notes (v5, Node 22+):
- Plain objects and arrays are deep-cloned over own enumerable string and symbol keys only.
- `Date` is cloned by value: `new Date(src.getTime())`.
- DOM nodes are cloned via `node.cloneNode(true)` when `cloneDom = true` (default).
- Other complex objects (Map, Set, RegExp, TypedArrays, ArrayBuffer, URL, etc.) are cloned via native `structuredClone` when available; if cloning fails, returns the original reference.
- Functions/classes and instances with custom prototypes are returned by reference.
- Accessors/descriptors are not preserved; only enumerable data properties are processed for plain objects.

## Use

```js
import { clone } from '@feugene/mu'
```

## Examples

```js
clone(1) // 1
clone(1.212) // 1.212

clone('test') // test

clone({}) // {}
clone({key: 'value', dig: {key: 'value'}}) // { key: 'value', dig: { key: 'value' } }

clone([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]

clone(true) // true
clone(false) // false

const d = new Date()
clone(new Date()) === d

isFunction(clone(new Function())) // true

const fn = (a, b) => a + b

clone(fn)(4, 2) === fn(4, 2)

clone(null) // null
clone() // undefined
```

```js
 const obj = {
  firstName: 'John',
  lastName : 'Doe',
  id       : 5566,
  fullName : function () {
    return this.firstName + ' ' + this.lastName
  },
}

clone(obj) === obj
```


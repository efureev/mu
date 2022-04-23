# clone

> <small>CORE</small>

## Description

Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference.

## Use

```js
import clone from '@feugene/mu/src/src/core/clone.js'
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


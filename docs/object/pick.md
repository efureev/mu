# pick

> <small>OBJECT</small>

## Description

Creates an object composed of the picked object properties.

## Use

```js
import pick from '@feugene/mu/src/object/pick.js'
```

## Examples

### Basic usage

```js
const object = {a: 1, b: '2', c: 3}

pick(object, ['a', 'c']) // { a: 1, c: 3 }
pick(object, ['c', 'a']) // { a: 1, c: 3 }
pick(object, ['c', 'c']) // { c: 3 }
pick(object, ['c', 'a', 'a', 'a', 'a']) // { a: 1, c: 3 }
```

### Deep path

```js
const objectDeep = {
  d : {
    a: 1,
    z: {r: 'test'}
  },
  b : '2',
  c : 3,
  dd: {
    array : ['one', 'two'],
    array2: [{id: 1}, {id: 2}]
  },
}

pick(objectDeep, ['c', 'd.a']) // { 'd.a': 1, c: 3 }
pick(objectDeep, ['c', 'd.z.r']) // { 'd.z.r': 'test', c: 3 }
pick(objectDeep, ['d.z']) // { 'd.z': { r: 'test' } }
pick(objectDeep, ['dd.array.0']) // { 'dd.array.0': 'one' }
pick(objectDeep, ['dd.array2.1']) // { 'dd.array2.1': { id: 2 } }
```

### Empty

```js
pick(object, []) // {}
pick(object, null) // {}
pick(object, undefined) // {}
pick(object, ['s', 'z', 'q']) // {}

pick(objectDeep, ['d.z.test', 'd.r']) // {}
```

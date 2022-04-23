# removeEmpty

> <small>OBJECT</small>

## Description

Removes all empty values in an `object` recursively.

## Use

```js
import removeEmpty from '@feugene/mu/src/src/object/removeEmpty.js'
```

## Examples

### Basic

```js
 const object = {
  key   : 1,
  label : 'Root',
  value : '',
  object: {},
  array : [],
  num   : 0,
}

removeEmpty(object) // { key: 1, label: 'Root' }

removeEmpty({}) // {}
removeEmpty({num: 0}) // {}
```

### Deeper

```js
 removeEmpty({
  key     : 1,
  label   : 'Root',
  children: [{value: 12, key: 2}, {value: 1, key: 0}, {}],
  params  : {
    k     : 'test',
    k2    : 0,
    k3    : null,
    k4    : {},
    k5    : [],
    params: {params: {}},
  },
})
===
{
  key     : 1,
  label   : 'Root',
  children: [{value: 12, key: 2}, {value: 1}],
  params  : {k: 'test'},
}
```

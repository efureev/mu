# merge

> <small>OBJECT</small>

## Description

Merge 2 or more objects recursively.

## Use

```js
import merge from '@feugene/mu/src/object/merge.js'
```

## Examples

```js
const js = {
  companyName: 'JS',
  products   : ['JS', 'GWT', 'Designer'],
  isSuperCool: true,
  office     : {
    size    : 2000,
    location: 'Palo Alto',
    isFun   : true,
  },
}

const newStuff = {
  companyName: 'Jacksonville',
  products   : ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
  office     : {
    size    : 40000,
    location: 'Redwood City',
  },
}

merge(js, newStuff) ===
{
  companyName: 'Jacksonville',
  products   : ['JS', 'GWT', 'Designer', 'Touch', 'Animator'],
  isSuperCool: true,
  office     : {
    size    : 40000,
    location: 'Redwood City',
    isFun   : true,
  },
}
```

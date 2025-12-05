# merge

> <small>OBJECT</small>

## Description

Merge 2 or more objects recursively.

Notes (v5, ESM-only, Node 22+):
- Immutable: input objects are not mutated; a new object is returned.
- Security: guarded against prototype pollution — keys `"__proto__"`, `"prototype"`, `"constructor"` are ignored.
- Keys: only own enumerable string and symbol keys are considered.
- Depth: deep-merge only plain objects (`Object.prototype` or null-proto). Arrays are replaced with a cloned array.

## Use

```js
import { merge } from '@feugene/mu'
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

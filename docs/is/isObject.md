# isObject

> <small>IS</small>

## Description

Is Object

## Use

```js
import isObject from '@feugene/mu/src/is/isObject.js'
```

## Examples

### Falsy

```js
isObject([])
isObject(2.5)
isObject(2, 2.5)
isObject('sdas')
isObject('sdas', '2312')
isObject(null)
isObject('')
isObject('')
isObject(new Function())
isObject(function () {})
isObject(() => {})
isObject(new Number(2))
isObject(Symbol())
isObject(Symbol('dfo'))
isObject(new Set([1, 2]))
isObject(new Set([]))
isObject(new String('sas'))
```

### Truly

```js
isObject({})
isObject({}, {})
isObject({ re: 1, test: 2 })
isObject({}, { re: 1, test: null })
isObject({ re: 1, test: { re: 1, test: { re: 1, test: 2 } } })
```

# equals

> <small>CORE</small>

## Description

Deep comparing the contents of 2 elements using strict equality.

## Use

```js
import equals from '@feugene/mu/src/core/equals.js'
```

## Examples

### Basic

Strings

```js
equals('[1, 2, 3, 4]', '[1, 2, 3, 4]') // true
equals('\n', '\n') // true
equals('[1, 2, 3, 4]', '[1, 2, 3, 4 ]') // false
```

Numbers

```js
equals(1, 1) // true
equals(-12.21, -12.21) // true
equals(-12.21, -12.212) // false
```

Objects

```js
// Truthy
equals({}, {})
equals({k: 1}, {k: 1})
equals({k: 1, v: [12, 3]}, {k: 1, v: [12, 3]})
equals({k: 1, v: null}, {k: 1, v: null})

// Falsy
equals({k: 1, v: null}, {k: 1, v: undefined})
```

Arrays

```js
// Truthy
equals([1, 2, 3, 4], [1, 2, 3, 4])
equals([1, 2, 3, [5, 6]], [1, 2, 3, [5, 6]])
equals([null], [null])

// Falsy
equals({k: 1, v: null}, {k: 1, v: undefined})
equals([undefined], [null])
```

Functions

```js  
equals(() => {}, () => {}) // true

const dFn = new Date()
equals(dFn, dFn) // true

equals(new Date(Date.parse('1970-01-01T00:00:00')), new Date(Date.parse('1970-01-01T00:00:00'))) // true

equals(new Date(123), new Date(123)) // true
equals(new Function(), new Function()) // true

equals(() => {}, new Function()) // false
```

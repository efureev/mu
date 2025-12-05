## isArrayLike

> IS

### Description

Checks if a value is **array-like**: not a function and has a valid non-negative `length` property within safe bounds.

Typical array-like values: strings, `arguments`, typed arrays, NodeLists and other DOM collections.

### Use

```ts
import { isArrayLike } from '@feugene/mu/is'

isArrayLike('abc') // true
isArrayLike([1, 2, 3]) // true
isArrayLike({ length: 2 }) // true
isArrayLike(() => {}) // false
```

### Examples

```ts
import { isArrayLike } from '@feugene/mu/is'

// Strings
isArrayLike('test') // true

// Real arrays and typed arrays
isArrayLike([1, 2, 3]) // true
isArrayLike(new Uint8Array(2)) // true

// Arguments
function demo() {
  return isArrayLike(arguments)
}
demo(1, 2, 3) // true

// Plain objects with length
isArrayLike({ length: 2, 0: 'a', 1: 'b' }) // true

// Not array-like
isArrayLike({}) // false
isArrayLike(() => {}) // false
```

### See also

- `isArray` — strict array check.
- `toArray` — convert array-like/iterable values to arrays.


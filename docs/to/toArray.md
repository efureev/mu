## toArray

> TO

### Description

Converts a value to an array.

Behavior overview:

- `null`/`undefined` → `[]`.
- Array-like values (arrays, strings, arguments, typed arrays) → copy of elements
  (`string` is split into characters).
- Numbers/booleans and numeric/boolean-like values → single-element array `[value]`.
- Iterables (with `Symbol.iterator`) → collected into an array.
- Other objects → their own enumerable values (via `object/values`).

### Use

```ts
import { toArray } from '@feugene/mu/to'

toArray('test') // ['t', 'e', 's', 't']
```

### Examples

```ts
import { toArray } from '@feugene/mu/to'

// Objects → values
toArray({ a: 1, b: 2 }) // [1, 2]

// Strings → characters
toArray('abc') // ['a', 'b', 'c']

// Numbers / booleans → single-element arrays
toArray(1) // [1]
toArray(true) // [true]

// Nullish → []
toArray(null) // []
toArray(undefined) // []

// Iterables
function* gen() {
  yield 1
  yield 2
}
toArray(gen()) // [1, 2]
```

### See also

- `values` — get values of an object.
- `toNumber` — numeric conversion.


## isEmpty

> IS

### Description

Checks if a value is considered "empty" according to the library rules.

General behavior (see implementation and tests):

- `null` and `undefined` are empty.
- Empty string `''` is empty; non-empty strings are not.
- Empty arrays `[]` are empty; arrays with at least one element are not.
- Empty plain objects `{}` are empty; objects with at least one own property are not.
- `true` is treated as empty (historical behavior); `false` is not.

### Use

```ts
import { isEmpty } from '@feugene/mu/is'

isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('') // true
isEmpty([]) // true
isEmpty({}) // true
```

### Examples

```ts
import { isEmpty } from '@feugene/mu/is'

// scalars
isEmpty(null) // true
isEmpty(undefined) // true
isEmpty('') // true
isEmpty(' ') // false
isEmpty(0) // false

// booleans (historical semantics)
isEmpty(true) // true
isEmpty(false) // false

// arrays
isEmpty([]) // true
isEmpty([1]) // false

// objects
isEmpty({}) // true
isEmpty({ a: 1 }) // false
```

### See also

- `isBlank` — checks for blank (whitespace-only) strings.
- `removeEmpty` — recursively removes empty values from objects.

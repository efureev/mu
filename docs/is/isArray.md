## isArray / isArrays

> IS

### Description

Array predicates.

- `isArray(value)` — checks if a single value is an array (`Array.isArray`).
- `isArrays(...values)` — returns `true` if **all** provided values are arrays.

### Use

```ts
import { isArray, isArrays } from '@feugene/mu/is'

isArray([1, 2, 3]) // true
isArray('test') // false

isArrays([1], [2, 3]) // true
isArrays([1], 'nope') // false
```

### Examples

```ts
import { isArray, isArrays } from '@feugene/mu/is'

// Basic checks
isArray([]) // true
isArray(new Array(3)) // true
isArray({ length: 2 }) // false

// Multiple values
isArrays([], [1, 2]) // true
isArrays([], {}, null) // false

// Edge cases
isArray(null as any) // false
isArray(undefined as any) // false
```

### See also

- `toArray` — convert arbitrary values to arrays.
- `isArrayLike` — array-like values that are not necessarily arrays.


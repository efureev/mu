## equals

> ARRAY

### Description

Deeply compares two arrays using strict equality for elements.

Arrays are considered equal if they have the same length and each pair of corresponding elements is deeply equal
according to the library's array/object comparison rules (primitives via `===`, nested arrays/objects recursed).

### Use

```ts
import { equals } from '@feugene/mu/array'

equals([1, '2', {}, []], [1, '2', {}, []]) // true
```

### Examples

```ts
import { equals } from '@feugene/mu/array'

// Primitives
equals([1, 2, 3], [1, 2, 3]) // true
equals([1, 2], [1, 2, 3]) // false

// Nested arrays/objects
equals([
  1,
  { a: 2 },
  [3, 4],
], [
  1,
  { a: 2 },
  [3, 4],
]) // true

// Reference differences for objects still matter according to deep-equals rules
```

### See also

- `objectsEqual` — deep equality for objects.
- `intersect` — overlap of two arrays.


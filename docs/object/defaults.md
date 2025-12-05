## defaults

> OBJECT

### Description

Apply default values from one or more source objects to an origin object without mutation.

Semantics:
- Immutable: returns a new object; inputs are not mutated.
- Keys: only own enumerable string and symbol keys from sources are considered; inherited/non‑enumerable are ignored.
- Guards: forbidden keys `"__proto__"`, `"prototype"`, `"constructor"` are skipped (proto‑pollution safe).
- Deep behavior: if both destination and source values are plain objects, defaults are applied recursively.
- Arrays: when setting a missing key from a source array, the array is cloned (no element‑wise merge).
- Presence rule: a key is considered present if it exists as an own property on destination, even if `undefined` or `null` — such keys are not overwritten.

### Use

```ts
import { defaults } from '@feugene/mu/object'

defaults({ a: { b: 2 } }, { a: { b: 1, c: 3 } })
// => { a: { b: 2, c: 3 } }
```

### Examples

```ts
import { defaults } from '@feugene/mu/object'

// Basic
defaults({ a: 1 }, { b: 2 }, { a: 3 }) // { a: 1, b: 2 }

// Nested objects merge only when both sides are plain objects
defaults({ o: { x: 1 } }, { o: { y: 2 } }) // { o: { x: 1, y: 2 } }

// Arrays: cloned if assigned; not merged element‑wise
defaults({}, { list: [1, 2] }) // { list: [1, 2] } (new array)

// Presence rule
defaults({ a: undefined }, { a: 1 }) // { a: undefined }
defaults({ a: null }, { a: 1 })      // { a: null }

// Symbols (enumerable)
const S = Symbol('k')
defaults({}, { [S]: 1 }) // { [S]: 1 }

// Security: forbidden keys ignored
defaults({}, { __proto__: { polluted: true } }) // {}
```

### See also

- `merge` — immutable deep merge for plain objects.

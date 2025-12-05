## sum

> OBJECT

### Description

Sums values of an object's properties with special handling for functions, `null`/`undefined`, booleans and
non-numeric values.

Algorithm (per property):

- If value is a function → call it and use its return value.
- If value is `null`, `undefined` or strictly `false` → treat as `0`.
- If value is **not** numeric (according to internal `isNumeric`) → treat as `1`.
- Otherwise, coerce to `number` and add to the accumulator.

### Use

```ts
import { sum } from '@feugene/mu/object'

sum({ a: 1, b: 2, c: 3 }) // 6
```

### Examples

```ts
import { sum } from '@feugene/mu/object'

// Basic numbers
sum({ a: 1, b: 2, c: 3 }) // 6

// Functions are evaluated
sum({ a: () => 2, b: () => 3 }) // 5

// Nullish and false → 0
sum({ a: null, b: undefined, c: false }) // 0

// Non-numeric values → 1 each
sum({ a: 'foo', b: {}, c: [] }) // 3

// Mixed values
sum({ a: 1, b: '2', c: 'foo', d: () => 4 })
// a:1, b:2, c:1 (non-numeric), d:4  → total 8
```

### See also

- `logicalAnd` — boolean aggregation over object values.
- `getSize` — count properties.


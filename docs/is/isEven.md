## isEven / isEvens

> IS

### Description

Even-number predicates.

- `isEven(value)` — checks if a value is an even finite number or numeric string.
- `isEvens(...values)` — returns `true` if all provided values are even.

Behavior (current implementation):

- Accepts numbers and numeric strings (after `Number()` conversion and `Number.isFinite`).
- Rejects `NaN`, `Infinity`, non-numeric strings, arrays, objects, booleans.

### Use

```ts
import { isEven, isEvens } from '@feugene/mu/is'

isEven(2) // true
isEven('4') // true
isEven(3) // false

isEvens(2, 4, '8') // true
```

### Examples

```ts
import { isEven, isEvens } from '@feugene/mu/is'

// Numbers
isEven(0) // true
isEven(1) // false
isEven(-2) // true

// Numeric strings
isEven('2') // true
isEven(' 4 ') // true (trimmed)
isEven('2.0') // true
isEven('2.5') // false

// Invalid values
isEven('foo' as any) // false
isEven(NaN as any) // false
isEven(Infinity as any) // false

// Multiple
isEvens(2, 4, '6') // true
isEvens(2, 3) // false
```

### See also

- `isNumeric` — numeric predicate for numbers and numeric strings.
- `isInteger` — integer predicate.

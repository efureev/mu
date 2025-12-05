## isNumeric / isNumerics

> IS

### Description

Numeric predicates.

- `isNumeric(value)` — `true` if value is a finite number or a numeric string.
- `isNumerics(...values)` — `true` if all values are numeric by the same rules.

### Use

```ts
import { isNumeric } from '@feugene/mu/is'

isNumeric('1e3') // true
isNumeric('foo') // false
```

### Examples

```ts
import { isNumeric, isNumerics } from '@feugene/mu/is'

// Numbers
isNumeric(1) // true
isNumeric(0) // true
isNumeric(NaN) // false
isNumeric(Infinity) // false

// Strings
isNumeric('42') // true
isNumeric(' 3.14 ') // true
isNumeric('1e3') // true
isNumeric('foo') // false

// Multiple
isNumerics(1, '2', '3.5') // true
isNumerics(1, 'foo' as any) // false
```

### See also

- `isFloat` — float-only predicate.
- `isInteger` — integer-only predicate.


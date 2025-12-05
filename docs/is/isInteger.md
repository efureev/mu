## isInteger / isIntegers

> IS

### Description

Integer predicates.

- `isInteger(value)` — checks whether a single value is an integer (number or numeric string).
- `isIntegers(...values)` — returns `true` if all provided values are integers; throws when called with no values or
  when some values cannot be parsed as numbers.

### Use

```ts
import { isInteger, isIntegers } from '@feugene/mu/is'

isInteger(12) // true
isInteger('3.2') // false

isIntegers(1, '2', 3) // true
```

### Examples

```ts
import { isInteger, isIntegers } from '@feugene/mu/is'

// Single value
isInteger(0) // true
isInteger(3.5) // false
isInteger('10') // true
isInteger('10.1') // false

// Multiple values
isIntegers(1, 2, 3) // true
isIntegers('1', '2') // true
isIntegers(1, 'foo' as any) // throws (non-numeric)
```

### See also

- `isFloat` — float-only predicate.
- `isNumeric` — any finite number or numeric string.


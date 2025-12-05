## isBoolean / isBooleans

> IS

### Description

Boolean predicates.

- `isBoolean(value)` — checks if a value is a boolean **primitive or object** (`true`, `false`, `new Boolean(...)`).
- `isBooleans(...values)` — returns `true` if all provided values are booleans.

### Use

```ts
import { isBoolean, isBooleans } from '@feugene/mu/is'

isBoolean(true) // true
isBoolean(false) // true
isBoolean(new Boolean(true)) // true
isBoolean(1) // false

isBooleans(true, false, new Boolean(false)) // true
```

### Examples

```ts
import { isBoolean, isBooleans } from '@feugene/mu/is'

// Basic
isBoolean(true) // true
isBoolean(false) // true
isBoolean(0) // false
isBoolean('true') // false

// Variadic
isBooleans(true, false) // true
isBooleans(true, 1 as any) // false
```

### See also

- `isNumeric` — numeric and numeric-string predicate.
- `toNumber` — convert booleans to numbers.


## toNumber

> TO

### Description

Converts a value to a JavaScript number.

Numeric strings are parsed, booleans become `1`/`0`, and other values follow standard JS coercion.

### Use

```ts
import { toNumber } from '@feugene/mu/to'

toNumber('3.2') // 3.2
```

### Examples

```ts
import { toNumber } from '@feugene/mu/to'

// Strings
toNumber('3.2') // 3.2
toNumber('-3.2') // -3.2

// Booleans
toNumber(true) // 1
toNumber(false) // 0

// Null / undefined
toNumber(null as any) // 0
toNumber(undefined as any) // NaN (per JS coercion)
```

### See also

- `toInteger` — integer conversion.
- `toFinite` — finite integer conversion.


## toInteger

> TO

### Description

Converts a value to an integer.

Numeric strings are parsed; fractional parts are truncated toward zero.

### Use

```ts
import { toInteger } from '@feugene/mu/to'

toInteger('3.2') // 3
```

### Examples

```ts
import { toInteger } from '@feugene/mu/to'

// Strings
toInteger('3.2') // 3
toInteger('-3.9') // -3

// Numbers
toInteger(4.9) // 4
toInteger(-4.1) // -4

// Non-numeric → 0 (depending on implementation)
toInteger('foo' as any) // 0
```

### See also

- `toFinite` — finite integer conversion.
- `toNumber` — general number conversion.


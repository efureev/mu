## toFinite

> TO

### Description

Converts a value to a **finite number** (integer). Intended to mirror Lodash-style `toFinite` semantics.

Common behavior (see tests and implementation):

- Numeric strings are parsed.
- `Infinity` / `-Infinity` are clamped to large finite values.
- `NaN` and non-numeric values become `0`.

### Use

```ts
import { toFinite } from '@feugene/mu/to'

toFinite('-3.2') // 3
```

### Examples

```ts
import { toFinite } from '@feugene/mu/to'

// Strings
toFinite('3.2') // 3
toFinite('-3.2') // 3

// Numbers
toFinite(4.9) // 4

// Non-numeric → 0
toFinite('foo') // 0
toFinite(null as any) // 0
```

### See also

- `toInteger` — integer conversion.
- `toNumber` — general number conversion.


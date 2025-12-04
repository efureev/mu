## fileSize

> FORMAT

### Description

Formats a byte size into a human‑readable string using units and thousand separators.
Defaults: base `kilo = 1024`, `decimals = 2`, decimal point `'.'`, thousands separator `','`, and a space before unit.

### Use

```ts
import { fileSize } from '@feugene/mu/format'

fileSize(7900221323) // '7.36 Gb'
```

### Examples

```ts
import { fileSize } from '@feugene/mu/format'

// Bytes
fileSize(512) // '512 bytes'
fileSize(0)   // '0 bytes'
fileSize(-1)  // '0 bytes'

// Kb, Mb, Gb
fileSize(1024)        // '1 Kb'
fileSize(1024 * 1024) // '1 Mb'
fileSize(7900221323)  // '7.36 Gb'

// Custom base 1000 and formatting
fileSize(1500, 1000, 1, ',', ' ', '') // '1,5K'
```

### See also

- `intWord` — generic compact integer formatter with units.

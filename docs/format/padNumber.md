## padNumber

> FORMAT

### Description

Left‑pad a number (or numeric string) with zeros to a target width.
`null`/`undefined` return `'0'`.

### Use

```ts
import { padNumber } from '@feugene/mu/format'

padNumber(2, 3) // '002'
```

### Examples

```ts
import { padNumber } from '@feugene/mu/format'

// Basic
padNumber(7, 2) // '07'
padNumber('12', 4) // '0012'

// Nullish → '0'
padNumber(undefined, 2) // '0'
padNumber(null, 2) // '0'

// Already wide enough — unchanged as string
padNumber(1234, 2) // '1234'
```

### See also

- `padDateTime` — fixed 2‑char zero padding for date/time parts.

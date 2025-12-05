## padDateTime

> FORMAT

### Description

Zero‑pad a date/time numeric part to 2 characters. `null`/`undefined` return `'00'`.

### Use

```ts
import { padDateTime } from '@feugene/mu/format'

padDateTime(3) // '03'
```

### Examples

```ts
import { padDateTime } from '@feugene/mu/format'

padDateTime(0) // '00'
padDateTime(9) // '09'
padDateTime(12) // '12'

// Nullish → '00'
padDateTime(undefined) // '00'
padDateTime(null) // '00'
```

### See also

- `padNumber` — variable‑width left‑padding.

## dateToString

> <small>DATE</small>

### Description

Formats a `Date` in LOCAL time as `YYYY-MM-DDTHH:mm:SS` (no timezone suffix).
Uses local getters and is affected by the environment timezone and DST rules.

### Use

```ts
import { dateToString } from '@feugene/mu/date'

dateToString(new Date(1609459200000))
// => e.g. '2021-01-01T00:00:00' (depends on your local timezone)
```

### See also

- `dateToStringUTC` — UTC formatter with `Z` suffix.
- `parseISO` — strict ISO/RFC3339 parser.

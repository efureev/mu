## elapsed

> DATE

### Description

Returns the difference between two dates in milliseconds: `dateB - dateA`.
Uses `Date#getTime()` under the hood. If `dateB` is not provided, the current time is used.

### Use

```ts
import { elapsed } from '@feugene/mu/date'

const a = new Date('2020-01-01T00:00:00Z')
const b = new Date('2020-01-01T00:00:10Z')
elapsed(a, b) // => 10000

// Second argument defaults to now
elapsed(a) // => Date.now() - a.getTime()
```

### Examples

```ts
import { elapsed } from '@feugene/mu/date'

// Basic
elapsed(new Date(0), new Date(1000)) // 1000

// Negative (when dateB < dateA)
elapsed(new Date(1000), new Date(0)) // -1000

// With current time
const start = new Date()
// ... do work
const ms = elapsed(start) // time spent in ms
```

### See also

- `now` — current timestamp in ms.
- `dateToString` — local formatting.
- `dateToStringUTC` — UTC formatting with `Z` suffix.

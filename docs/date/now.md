## now

> DATE

### Description

Returns the current timestamp in milliseconds since the UNIX epoch.
Thin wrapper over `Date.now()`.

### Use

```ts
import { now } from '@feugene/mu/date'

const ts = now() // e.g. 1733356800000
```

### Examples

```ts
import { now, elapsed } from '@feugene/mu/date'

const start = now()
// do some work
const end = now()
const diff = end - start

// same with elapsed(Date)
const begin = new Date()
// work...
const took = elapsed(begin) // ~= diff
```

### See also

- `elapsed` — difference between dates in ms.
- `dateToString` — local formatting.
- `dateToStringUTC` — UTC formatting with `Z` suffix.

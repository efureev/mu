# dateToStringUTC

> <small>DATE</small>

## Description

Formats a `Date` in UTC as `YYYY-MM-DDTHH:mm:SSZ` using UTC getters.
Timezone/DST agnostic output.

## Use

```ts
import { dateToStringUTC } from '@feugene/mu/date'

dateToStringUTC(new Date(Date.UTC(2020, 0, 2, 3, 4, 5)))
// '2020-01-02T03:04:05Z'
```

## See also

- `dateToString` — local time formatter without timezone suffix.
- `parseISO` — strict ISO/RFC3339 parser.

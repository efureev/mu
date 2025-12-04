# parseISO

> <small>DATE</small>

## Description

Parses a strict ISO 8601/RFC 3339 string or an epoch milliseconds string into a `Date`.
Returns `Date` on success, otherwise `null`.

Notes:
- Ambiguous human strings like `12/04/2025` are rejected to avoid local vs UTC surprises.
- Prefer `dateToStringUTC` when formatting for storage/logging.

## Use

```ts
import { parseISO } from '@feugene/mu/date'

parseISO('2025-12-04T22:58:00Z')
parseISO('2025-12-04T22:58:00+03:00')
parseISO('1733353080000') // epoch ms (string)
```

## Examples

```ts
parseISO('2025-12-04') instanceof Date // true
parseISO('Thu, 01 Jan 1970 00:00:00 GMT') // null (not strict ISO)
parseISO('') // null
```

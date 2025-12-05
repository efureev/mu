## isDate / isDates

> IS

### Description

Date predicates.

- `isDate(value)` — checks if a value is a `Date` instance.
- `isDates(...values)` — returns `true` if all provided values are `Date` instances.

This does **not** verify that the date is valid (`!Number.isNaN(date.getTime())`); it only checks the type.

### Use

```ts
import { isDate, isDates } from '@feugene/mu/is'

isDate(new Date()) // true
isDate('2020-01-01') // false

isDates(new Date(), new Date('2020-01-01')) // true
```

### Examples

```ts
import { isDate, isDates } from '@feugene/mu/is'

// Basic
isDate(new Date()) // true
isDate(Date.now()) // false

// Multiple
isDates(new Date(0), new Date(1)) // true
isDates(new Date(), 'not date' as any) // false

// Invalid Date still counts as Date (type-only check)
const d = new Date('not a real date')
isDate(d) // true
```

### See also

- `parseISO` — strict date parsing helper in `@feugene/mu/date`.
- `dateToString` / `dateToStringUTC` — formatting helpers.

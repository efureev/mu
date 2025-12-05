## intWord

> FORMAT

### Description

Compact integer formatter: scales a number by a base (`kilo`, default 1000) and appends a unit suffix.
Uses `number()` internally for decimal/thousands formatting.

Default units: `['', 'K', 'M', 'B', 'T']`.

### Use

```ts
import { intWord } from '@feugene/mu/format'

intWord(21323) // '21.32K'
```

### Examples

```ts
import { intWord } from '@feugene/mu/format'

// Base usage
intWord(999)        // '999.00'
intWord(1000)       // '1.00K'
intWord(1532000)    // '1.53M'

// Custom units and formatting
intWord(1532, ['','Kb','Mb','Gb'], 1000, 1, ',', ' ', '') // '1,5Kb'

// Thousands separator
intWord(1234567, undefined, 1000, 2, '.', ',') // '1,23M'

// Negative numbers
intWord(-1234) // '-1.23K'
```

### See also

- `fileSize` — human‑readable file sizes.
- `number` — base number formatter with options.

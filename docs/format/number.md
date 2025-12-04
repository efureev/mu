## number

> FORMAT

### Description

Formats a number with thousands separators and a decimal point.
Supports both positional arguments and an options object.

Special cases: `NaN` → `'NaN'`; `Infinity`/`-Infinity` → stringified as-is; preserves `-0` sign for `decimals = 0`.

### Use

```ts
import { number } from '@feugene/mu/format'

// positional (legacy)
number(10000, 2, '.', ',') // '10,000.00'

// options object (recommended)
number(10000, { decimals: 2, decPoint: '.', thousandsSeparator: ',', clearDecimals: false })
```

### Examples

```ts
import { number } from '@feugene/mu/format'

// Basic
number('10000') // '10,000.00' (decimals default 2)

// No fraction
number(1234.56, { decimals: 0 }) // '1,235'

// Clear decimals when integer (no fractional part if abs(value) is integer)
number(1000, { clearDecimals: true }) // '1,000'
number(1000.5, { clearDecimals: true }) // '1,000.50'

// Custom separators
number(1234567.89, { decPoint: ',', thousandsSeparator: ' ' }) // '1 234 567,89'

// Edge cases
number(NaN as any) // 'NaN'
number(Infinity) // 'Infinity'
number(-Infinity) // '-Infinity'
number(-0, { decimals: 0 }) // '-0'
```

### See also

- `numberRus` — preset for RU formatting (space group, comma decimal, clear decimals for integers).
- `padNumber`, `padDateTime` — zero-padding helpers.

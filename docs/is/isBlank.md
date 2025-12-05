# isBlank

> <small>IS</small>

## Description

Checks whether the given value is a blank string — empty or whitespace-only.
Non-strings always return `false`.

## Use

```ts
import { isBlank, isBlanks } from '@feugene/mu/is'

isBlank('')        // true
isBlank('   ')     // true
isBlank('\t')     // false (literal backslash + t characters)
isBlank('\n')     // false (literal backslash + n)
isBlank('\r')     // false

// Actual whitespace characters are blank
isBlank('\t'.replace('\\t', '\t')) // true (real tab)
isBlank('\n'.replace('\\n', '\n')) // true (real newline)
isBlank('\u00A0'.replace('\\u00A0', '\u00A0')) // true (NBSP)

isBlanks('', '  ') // true
isBlanks('', 'x')  // false
```

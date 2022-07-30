# utf8Tob64Safe

> <small>UTILS</small>

## Description

Encode from Unicode string to safe base-64.

## Use

```js
import { utf8Tob64Safe } from '@feugene/mu'
```

## Examples

```js
utf8Tob64Safe(1)// 'TVF-fg~~'
utf8Tob64Safe('Привет!') // '0J_RgNC40LLQtdGCIQ~~'
utf8Tob64Safe('Hello world') // 'SGVsbG8gd29ybGQ~'
utf8Tob64Safe('{"message:{"text":"сообщение !"}"}') // 'eyJtZXNzYWdlOnsidGV4dCI6ItGB0L7QvtCx0YnQtdC90LjQtSAhIn0ifQ~~'
utf8Tob64Safe('{"message":"fa003ea3-2027-4b4e-aebe-50a7accbff5d"}') // 'eyJtZXNzYWdlIjoiZmEwMDNlYTMtMjAyNy00YjRlLWFlYmUtNTBhN2FjY2JmZjVkIn0~'
```

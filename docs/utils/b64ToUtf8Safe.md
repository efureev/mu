# b64ToUtf8Safe

> <small>UTILS</small>

## Description

Decode from safe base-64 to Unicode string.

## Use

```js
import b64ToUtf8Safe from '@feugene/mu/src/utils/b64ToUtf8Safe.js'
```

## Examples

```js
b64ToUtf8Safe('TVF-fg~~') // 1
b64ToUtf8Safe('0J_RgNC40LLQtdGCIQ~~') // 'Привет!'
b64ToUtf8Safe('SGVsbG8gd29ybGQ~') // 'Hello world' 
b64ToUtf8Safe('eyJtZXNzYWdlOnsidGV4dCI6ItGB0L7QvtCx0YnQtdC90LjQtSAhIn0ifQ~~') // '{"message:{"text":"сообщение !"}"}' 
b64ToUtf8Safe('eyJtZXNzYWdlIjoiZmEwMDNlYTMtMjAyNy00YjRlLWFlYmUtNTBhN2FjY2JmZjVkIn0~') // '{"message":"fa003ea3-2027-4b4e-aebe-50a7accbff5d"}' 
```

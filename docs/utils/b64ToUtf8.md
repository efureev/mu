# b64ToUtf8

> <small>UTILS</small>

## Description

Decode string from base-64 to Unicode.

## Use

```js
import { b64ToUtf8 } from '@feugene/mu'
```

## Examples

```js
b64ToUtf8('MQ==') // '1'
b64ToUtf8('SGVsbG8gd29ybGQ=') // 'Hello world'
b64ToUtf8('w5DCn8ORwoDDkMK4w5DCssOQwrXDkcKC') // 'Привет'
```

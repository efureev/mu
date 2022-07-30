# trimSuffix

> <small>STRING</small>

## Description

Remove a suffix from a String

## Use

```js
import { trimSuffix } from '@feugene/mu'
```

## Examples

```js
trimSuffix('/es/test/es/page', '/es/page') // '/es/test'
trimSuffix('/es/', '/') // '/es'
trimSuffix('file.md', '.md') // 'file
```

# replaceByTemplate

> <small>STRING</small>

## Description

Translate characters or replace substrings in string by map.

## Use

```js
import { replaceByTemplate } from '@feugene/mu'
```

## Examples

```js
replaceByTemplate('hi all, I said hello', {hi: 'hello', hello: 'hi'}) // 'hello all, I said hi'
replaceByTemplate('hi all, I said hi all!', {hi: 'hello', all: 'you'}) // 'hello you, I said hello you!'
replaceByTemplate('hi all, I said hello', {hi: 'hello', hello: 'hi', I: 'we'}) // 'hello all, we said hi'
replaceByTemplate('hi all', {' all': '!', hello: 'hi', I: 'we'}) // 'hi!'
replaceByTemplate('hi all', {}) // 'hi all'
replaceByTemplate('aa', {aa: 2, a: 1}) // '2'
replaceByTemplate('aaaa', {aa: 2, a: 1}) // '22'
```

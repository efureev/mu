# strtr

> <small>STRING</small>

## Description

Translate characters or replace substrings in string.

## Use

```js
import { strtr } from '@feugene/mu'
```

## Examples

### From object

```js
strtr('hi all, I said hello', {hi: 'hello', hello: 'hi'}) // 'hello all, I said hi'
strtr('hi all, I said hi all!', {hi: 'hello', all: 'you'}) // 'hello you, I said hello you!'
strtr('hi all, I said hello', {hi: 'hello', hello: 'hi', I: 'we'}) // 'hello all, we said hi'
strtr('hi all', {' all': '!', hello: 'hi', I: 'we'}) // 'hi!'
strtr('hi all', {}) // 'hi all'
strtr('aa', {aa: 2, a: 1}) // '2'
strtr('aaaa', {aa: 2, a: 1}) // '22'
```

### Basic

```js
const string = 'hello world'

strtr(string, 'l', 'p') // 'heppo worpd'
strtr('abcdcdb', 'ab', 'AB') // 'ABcdcdB'
strtr('äaabaåccasdeöoo', 'äåö', 'aao') // 'aaabaaccasdeooo'
strtr('ääääääää', 'ä', 'a') // 'aaaaaaaa'
strtr(strtr('http', 'pthxyz', 'xyzpth'), 'pthxyz', 'xyzpth') // 'http'
```

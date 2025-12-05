## Install

<!-- tabs:start -->

#### **JSON**

Add to `package.json` file the lib as dependency.

```json
{
  "dependencies": {
    "@feugene/mu": "^5.0"
  }
}
```

#### **YARN**

```bash
yarn add @feugene/mu
```

#### **NPM**

```bash
npm install @feugene/mu
```

<!-- tabs:end -->

## Usage (ESM-only, Node 22+)

```ts
// Import single helper (preferred for tree-shaking)
import { number } from '@feugene/mu/format'

// Or import multiple named helpers from a submodule
import { dateToStringUTC, parseISO } from '@feugene/mu/date'

// Root imports also work (may pull more symbols depending on your bundler)
import { merge } from '@feugene/mu'
```

The library is ESM-first and works in modern browsers (after bundling) and Node 22+ CLI.

### Import style

Prefer importing from submodules for better tree-shaking:

```ts
// Preferred: submodule imports
import { number } from '@feugene/mu/format'
import { isEmpty } from '@feugene/mu/is'
import { merge } from '@feugene/mu/object'

// Root import (valid, but may pull more code depending on bundler)
import { numberRus, defaults } from '@feugene/mu'
```

All examples in method pages follow this pattern: `import { fn } from '@feugene/mu/<section>'`.

## Table of Contents

- [Core](#core)
- [Is](#is)
- [Array](#array)
- [Object](#object)
- [String](#string)
- [Date](#date)
- [Format](#format)
- [To](#to)
- [Sort](#sort)
- [Structures](#structures)
- [Utilities](#utilities)

### Core

| Function                   | Return        | Description                                                                                                   |
|:---------------------------|:--------------|:--------------------------------------------------------------------------------------------------------------|
| [clone](core/clone.md)     | mixed         | Clone simple variables including array, {}-like objects, DOM nodes and Date without keeping the old reference |
| [equals](core/equals.md)   | bool          | Deep comparing the contents of 2 elements using strict equality                                               |
| [forEach](core/forEach.md) | array, object | Iterates over elements of `collection` and invokes `iteratee` for each element                                |
| [keys](core/keys.md)       | array         | Creates an array of the own enumerable property names of `object`                                             |
| [match](core/match.md)     | mixed         | It replaces such constructions as `if-else` and `switch`                                                      |
| [tap](core/tap.md)         | mixed         | This method invokes `interceptor` and returns `value`.                                                        |

### Is

| Function                                       | Return | Example                                                |
|:-----------------------------------------------|:-------|:-------------------------------------------------------|
| [isArguments](is/isArguments.md)               | bool   | `isArguments([1,2]); // false`                         |
| [isArray](is/isArray.md)                       | bool   | `isArray([1,2]); // true`                              |
| [isArrayLike](is/isArrayLike.md)               | bool   | `isArrayLike('abc'); // true`                          |
| [isBlob](is/isBlob.md)                         | bool   | `isBlob(new Blob([])); // true`                        |
| [isBoolean](is/isBoolean.md)                   | bool   | `isBoolean(true); // true`                             |
| [isBuffer](is/isBuffer.md)                     | bool   | `isBuffer(Buffer.alloc(2)); // true`                   |
| [isDate](is/isDate.md)                         | bool   | `isDate(new Date()); // true`                          |
| [isEmpty](is/isEmpty.md)                       | bool   | `isEmpty(null, undefined, ''); // true`                |
| [isBlank](is/isBlank.md)                       | bool   | `isBlank('   '); // true`                              |
| [isEmptyObject](is/isObject.md)                | bool   | `isEmptyObject({}); // true`                           |
| [isEven](is/isEven.md)                         | bool   | `isEven(2); // true`                                   |
| [isEvens](is/isEven.md)                        | bool   | `isEvens(2, 4, '8'); // true`                          |
| [isFloat](is/isFloat.md)                       | bool   | `isFloat(2.2); // true`                                |
| [isFloatCanonical](is/isFloat.md)              | bool   | `isFloatCanonical('2.0'); // true`                     |
| [isFloats](is/isFloat.md)                      | bool   | `isFloats('2.2','+2.1'); // true`                      |
| [isFunction](is/isFunction.md)                 | bool   | `isFunction(() => {}); // true`                        |
| [isInteger](is/isInteger.md)                   | bool   | `isInteger(12); // true`                               |
| [isLength](is/isLength.md)                     | bool   | `isLength(3); // true`                                 |
| [isNil](is/isNil.md)                           | bool   | `isNil(undefined); // true`                            |
| [isNils](is/isNil.md)                          | bool   | `isNils(null, undefined); // true`                     |
| [isNull](is/isNull.md)                         | bool   | `isNull(null); // true`                                |
| [isNulls](is/isNull.md)                        | bool   | `isNulls(null, undefined); // false`                   |
| [isNumeric](is/isNumeric.md)                   | bool   | `isNumeric('1e3'); // true`                            |
| [isObject](is/isObject.md)                     | bool   | `isObject([], '12', 4, Function); // false`            |
| [isObjectLike](is/isObjectLike.md)             | bool   | `isObjectLike([]); // true`                            |
| [isString](is/isString.md)                     | bool   | `isString('test'); // true`                            |
| [isSymbol](is/isSymbol.md)                     | bool   | `isSymbol(Symbol('a')); // true`                       |
| [isTypedArray](is/isTypedArray.md)             | bool   | `isTypedArray(new Uint8Array(2)); // true`             |
| [isUrl](is/isUrl.md)                           | bool   | `isUrl('https://example.com'); // true`                |

### Array

| Function                                               | Return | Description                                                                      | Example                                                              |
|:-------------------------------------------------------|:-------|:---------------------------------------------------------------------------------|:---------------------------------------------------------------------|
| [arrayEach](array/arrayEach.md)                        | array  | A specialized version of `forEach` for arrays                                    | `arrayEach([1, '2', {}, []], (el)=>{...})`                           |
| [clear](array/clear.md)                                | void   | Clear array                                                                      |                                                                      |
| [difference](array/difference.md)                      | array  | The difference will output the elements from array A that are not in the array B | `difference([2], [1, 4, 8])); // [2]`                                |
| [equals](array/equals.md)                              | bool   | Deep comparing the contents of 2 arrays using strict equality                    | `equals([1, '2', {}, []], [1, '2', {}, []])`                         |
| [intersect](array/intersect.md)                        | array  | Return common items for two arrays                                               | `intersect([1, 2, 3, 4, 5], [1, 4, 8]); // [1,4]`                    |
| [intersectAll](array/intersectAll.md)                  | array  | Return common items for all arrays                                               | `intersectAll([1, 2, 3, 4, 5], [1, 4, 8],[1])); // [1]`              |
| [random](array/random.md)                              | array  | Random function returns random item from array                                   | `random([1,2,3,4,5]]);`                                              |
| [symmetricalDifference](array/symmetricalDifference.md) | array  | will output anti-intersection                                                    | `symmetricalDifference([1, 2, 3, 4, 5], [1, 4, 8]); // [2, 3, 5, 8]` |

### Object

| Function                                   | Return  | Description                                                                               | Example                                                         | Result                       |
|:-------------------------------------------|:--------|:------------------------------------------------------------------------------------------|:----------------------------------------------------------------|:-----------------------------|
| [defaults](object/defaults.md)             | object  | Add to source object missing properties from other sources                                | `defaults({ a: { b:2 }}, { a: { b:1, c:3 }})`                   | `{a:{ b:2, c:3 }}`           |
| [objectsEqual](object/equals.md)           | bool    | Deep comparing the contents of 2 or more object using strict equality                     | `equals({k: 1, v: [1,2,{}]}, {k: 1, v: [1,2,{}]})`              |                              |
| [filter](object/filter.md)                 | object  | Filter props in Object                                                                    | `filter({key1:1, key:4}, ([key, value])=>value > 1)`            | `{key:4}`                    |
| [flip](object/flip.md)                     | object  | Swap key with value                                                                       | `swap({a:1, b:'test', c:3})`                                    | `{1:'a', 'test':'b', 3:'c'}` |
| [fromQueryString](object/fromQueryString.md) | object | Converts a query string back into an object                                               | `fromQueryString('foo=1&bar=2')`                                |                              |
| [getSize](object/getSize.md)               | int     | Returns count of properties of the object                                                 | `getSize({k: 1, v: []})`                                        |                              |
| [logicalAnd](object/logicalAnd.md)         | boolean | Logical `AND` by object's values                                                          | `logicalAnd({ a: true, b: true, c: false })`                    | `false`                      |
| [merge](object/merge.md)                   | object  | Merge 2 or more objects recursively                                                       | `merge({k: 1}, {v: 'test'}, {k: 2})`                            |                              |
| [pathToObject](object/pathToObject.md)     | object  | Return Object from sting path                                                             | `pathToObject('key.sub', 1)`                                    | {key:{sub:1}}                |
| [pick](object/pick.md)                     | object  | Creates an object composed of the picked object properties.                               | `pick({a:1, b:2, c:3}, ['a', 'b'])`                             |                              |
| [remove](object/remove.md)                 | object  | Remove value by deep key in object(array)                                                 | `remove(obj, 'key.sub.items.1')`                                |                              |
| [removeEmpty](object/removeEmpty.md)       | object  | Removes all empty values in an `object` recursively                                       | `removeEmpty({val:'hi', val2:null, val3:{}})`                   | `{val:'hi'}`                 |
| [select](object/select.md)                 | mixed   | Get value by deep key in object(array)                                                    | `select(obj, 'key.sub.items.1')`                                |                              |
| [sum](object/sum.md)                       | Number  | Sum of object's values                                                                    | `sum({ a: 1, b: 2, c: 3 })`                                     | `6`                          |
| [toQueryObjects](object/toQueryObjects.md) | object  | Converts a `name` - `value` pair to an array of objects with support for nested structure | `toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])` |                              |
| [toQueryString](object/toQueryString.md)   | string  | Takes an object and converts it to an encoded query string                                | `toQueryString({colors: ['red', 'green', 'blue']}`              |                              |
| [values](object/values.md)                 | array   | Creates an array of the own enumerable string keyed property values of `object`           | `values('hi')`                                                  | `['h','i']`                  |

### To

| Function                   | Return | Description                          | Example                                |
|:---------------------------|:-------|:-------------------------------------|:---------------------------------------|
| toArray                    | array  | Converts `value` to a array          | `toArray('test') // ['t','e','s','t']` |
| toFinite                   | int    | Converts `value` to a finite integer | `toFinite('-3.2') // 3`                |
| toInteger                  | int    | Converts `value` to a integer        | `toInteger('3.2') // 3`                |
| toNumber                   | int    | Converts `value` to a number         | `toNumber('3.2') // 3.2`               |
| [toString](to/toString.md) | string | Converts `value` to a string         | `toString(1234) // '1234'`             |

### Sort

| Function                                                             | Return       | Description                                           | Example                                                 |
|:---------------------------------------------------------------------|:-------------|:------------------------------------------------------|:--------------------------------------------------------|
| [sortObjectsInArrayByProperty](sort/sortObjectsInArrayByProperty.md) | array-object | Allows to sort an array into an objects by key        | `sortObjectsInArrayByProperty(object, 'list.title')`    |
| [sortDescObjectsInArrayByProperty](sort/sortDescObjectsInArrayByProperty.md) | array-object | Allows to sort (DESC) an array into an objects by key | `sortDescObjectsInArrayByProperty(object, 'list.title')` |

### String

| Function                                                              | Return | Description                                                          |
|:----------------------------------------------------------------------|:-------|:---------------------------------------------------------------------|
| [camelCase](string/camelCase.md)                                      | string | Convert a dash/dot/underscore/space separated string to camelCase    |
| [clearSpaces](string/clearSpaces.md)                                  | string | Remove extra spaces from string                                      |
| [endsWith](string/endsWith.md)                                        | string | Checks if string ends with the given target string                   |
| [hasUnicode](string/hasUnicode.md)                                    | bool   | Checks if `string` contains Unicode symbols                          |
| [normalizeCustom](string/normalizeCustom.md)                          | string | Normalize string by custom RegExp                                    |
| [normalizeName](string/normalizeName.md)                              | string | Normalize string by RegExp `[^0-9a-zA-Z_]`                           |
| [normalizeKebab](string/normalizeKebab.md)                            | string | Normalize string to kebab (by RegExp `[^0-9a-zA-Z\-]`)               |
| [padStart](string/padStart.md)                                        | string | add leading symbols                                                  |
| [padEnd](string/padEnd.md)                                            | string | add ending symbols                                                   |
| [pascalCase](string/pascalCase.md)                                    | string | Convert a dash/dot/underscore/space separated string to PascalCase   |
| [removeConsecutiveDuplicates](string/removeConsecutiveDuplicates.md)  | string | Remove consecutive duplicates                                        |
| [replaceByTemplate](string/replaceByTemplate.md)                      | string | Translate characters or replace substrings in string by map          |
| [startsWith](string/startsWith.md)                                    | string | Checks if string starts with the given target string                 |
| [stringToArray](string/stringToArray.md)                              | string | Converts `string` to an array                                        |
| [strtr](string/strtr.md)                                              | string | Translate characters or replace substrings in string                 |
| [titleCase](string/titleCase.md)                                      | string | Converts the first character of every word into string to upper case |
| [trim](string/trim.md)                                                | string | Trim leading and trailing whitespace                                 |
| [trimAny](string/trimAny.md)                                          | string | Trim any characters                                                  |
| [trimPrefix](string/trimPrefix.md)                                    | string | Remove a prefix from a target string                                 |
| [trimSuffix](string/trimSuffix.md)                                    | string | Remove a suffix from a target string                                 |
| [upperFirst](string/upperFirst.md)                                    | string | Converts the first character of string to upper case                 |

### Date

| Function         | Return  | Description                                                     |
|:-----------------|:--------|:----------------------------------------------------------------|
| elapsed          | number  | Difference in milliseconds between dates                        |
| now              | number  | Current time in ms since UNIX epoch                             |
| dateToString     | string  | Local time `YYYY-MM-DDTHH:mm:SS` (no timezone suffix)           |
| dateToStringUTC  | string  | UTC time `YYYY-MM-DDTHH:mm:SSZ`                                 |
| parseISO         | Date\|null | Strict ISO/RFC3339 or epoch ms string → Date; else `null`      |

### Format

| Function    | Return | Description                               | Example                                         |
|:------------|:-------|:------------------------------------------|:------------------------------------------------|
| fileSize    | string | Display number as file size               | `fileSize(7900221323) // '7.36 Gb'`             |
| intWord     | string | Compact integer with unit suffix          | `intWord(21323) // '21.32K'`                    |
| number      | string | Formatting number (options supported)     | `number('10000') // '10,000.00'`                |
| numberRus   | string | RU format: space group, comma as decimal  | `numberRus(1001.2) // '1 001,20'`               |
| padDateTime | string | Zero-pad date/time part to 2 chars        | `padDateTime(1) // '01'`                        |
| padNumber   | string | Left-pad a number with zeros to width N   | `padNumber(2,3) // '002'`                       |

### Utilities

| Function                                | Return | Description                                                                          |
|:----------------------------------------|:-------|:-------------------------------------------------------------------------------------|
| [b64ToUtf8](utils/b64ToUtf8.md)         | string | Decode string from base-64 to Unicode                                                |
| [b64ToUtf8Safe](utils/b64ToUtf8Safe.md) | string | Decode from safe base-64 to Unicode string                                           |
| [times](utils/times.md)                 | string | Invokes the iteratee `n` times, returning an array of the results of each invocation |
| [utf8ToB64](utils/utf8ToB64.md)         | string | Encode string from Unicode to base-64                                                |
| [utf8Tob64Safe](utils/utf8Tob64Safe.md) | string | Encode from Unicode string to safe base-64                                           |

### Structures

- Stack
- Queue

---

## Behavior changes in v5

Compared to earlier major versions, v5 introduces clearer, safer semantics:

- **Object helpers**
  - `merge` and `defaults` are now **immutable**: they return new objects instead of mutating inputs.
  - Both ignore dangerous keys (`"__proto__"`, `"prototype"`, `"constructor"`) to prevent prototype pollution.
  - Deep merge/defaults apply only to plain objects; arrays are cloned but not merged element-wise.

- **Clone**
  - `clone` uses native `structuredClone` where safe (Node 22+/modern browsers) with a predictable fallback for plain
    objects/arrays and Dates.

- **Date**
  - `parseISO` is a **strict** parser: accepts only ISO/RFC3339 or epoch-ms strings, returns `null` for ambiguous
    formats.
  - `dateToString` (local) и `dateToStringUTC` (UTC) теперь явно документируют таймзону и формат.

- **Format**
  - `number` / `numberRus` корректно обрабатывают `NaN`, `Infinity`, `-0`, имеют options-object API и стабильную
    локальную семантику (`numberRus`: запятая как десятичный разделитель, пробел — тысячный).

See individual method pages for more details and examples.

---

## Documentation quality and checks

To keep documentation in sync with code:

- All helpers listed in the tables above have dedicated pages in `docs/<section>/*.md`.
- Tables link only to existing files; new helpers should be added to both the table and their own method page.

Recommended future automation (not included in the package, но легко добавить в CI):

- Script that scans `docs/README.md` and `docs/ru/README.md` and verifies that every linked file exists.
- Optional type-level tests (e.g. via `tsd`) that compile `Use`-examples from docs to ensure signatures stay valid.

## Test

```bash
jest
```

or

```bash
yarn test
```

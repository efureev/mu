## Установка
```json
{
    "dependencies": {
      "@feugene/mu": "^2.17"
    }
}
```

## Тесты
```bash
jest
```

## Содержание

- [Core](#core)
- [Is](#is)
- [Array](#array)
- [Object](#object)
- [String](#string)
- [Date](#date)
- [Format](#format)
- [To](#to)
- [Structures](#structures)
- [Utilities](#utilities)

## Core
Function | Return | Description
:--- | :--- | :---
clone | mixed | Клонирует простые переменные, включая массивы, {}-похожие объекты, DOM-ноды и даты без сохранения старых ссылок
equals | bool | Глубокое сравнивание содержания двух элементов (используется строгое сравнение)
forEach | array, object | Перебирает элементы `collection` и выполняет `iteratee` для каждого элемента
keys | array | Создает массив собственных имен свойтв объекта

## Is
Function | Return | Example
:--- | :--- | :---
isArguments | bool | `isArguments([1,2]]); // false`
isArray | bool | `isArray([1,2]]); // true`
isArrayLike | bool | `isArrayLike('abc'); // true`
isBlob | bool | `isBlob(new Blob([]])); // true`
isBoolean | bool | `isBoolean(true, true); // true`
isBuffer | bool | `isBuffer(new Buffer(2)); // true`
isDate | bool | `isDate(new Date); // true`
isEmpty | bool  | `isEmpty(null, undefined, ''); // true`
isEmptyObject | bool | `isEmptyObject({}}); // true`
isEven | bool | `isEven(2, 4, '8'); // true`
isFunction | bool | `isFunction(()=>{})); // true`
isFloats | bool | `isFloat('2.2','+2.1')); // true`
isFloat | bool | `isFloat('2.0')); // false`
isFloatCanonical | bool | `isFloat('2.0')); // true`
isInteger | bool | `isInteger(12,-21); // true`
isLength | bool | `isLength(3); // true`
isNil | bool | `isNil(undefined); // true`
isNils | bool | `isNulls(null, undefined, void 0); // true`
isNull | bool | `isNull(null); // true`
isNulls | bool | `isNulls(null, undefined); // false`
isNumeric | bool | `isNumeric(12,-2.3); // true`
isObject | bool | `isObject([], '12', 4, new Function()); // false`
isObjectLike | bool | `isObjectLike([]); // true`
isString | bool | `isString('test'); // true`
isSymbol | bool | `isSymbol(Symbol('a')); // true`
isTypedArray | bool | `isTypedArray(new Uint8Array); // true`

## Array
Function | Return | Description | Example
:--- | :---| :---| :---
equals | bool | Глубокое сравнивание 2 массивов (используется строгое сравнение) | `equals([1, '2', {}, []], [1, '2', {}, []])`
arrayEach | array |  Спец версия `forEach` для массивов | `arrayEach([1, '2', {}, []], (el)=>{...})`
clear | void |  Очищает массив | 
difference | array |  Возвращает различающиеся элементы для всех массивов | `difference([2], [1, 4, 8])); // [2]` 
intersect | array |  Возвращает общие элементы для двух массивов | `intersect([1, 2, 3, 4, 5], [1, 4, 8]); // [1,4]`
intersectAll | array |  Возвращает общие элементы для всех массивов | `intersectAll([1, 2, 3, 4, 5], [1, 4, 8],[1])); // [1]`
symmetricalDifference | array |  Вернет анти-intersection | `symmetricalDifference([1, 2, 3, 4, 5], [1, 4, 8]); // [2, 3, 5, 8]`
random | array |  Возвращает случайный элемент из массива | `random([1,2,3,4,5]]);`


## Object
Function | Return | Description | Example | Result
:--- | :--- | :--- | :---  | :--- 
equals | bool | Глубокое сравнивание содержания 2 и более объектов, используя строгое сравнивание | `equals({k: 1, v: [1,2,{}]}, {k: 1, v: [1,2,{}]})`
getSize | int | Возвращает количество свойств объекта | `getSize({k: 1, v: []})`
filter | object | Фильтрует объект по заданным критериям | `filter({key1:1, key:4}, ([key, value])=>value > 1)` | `{key:4}`
fromQueryString | object | Преобразует строку запроса в объект | `fromQueryString('foo=1&bar=2')`
defaults | object | Добавляет в исходный объект отсутствующие свойства из других объектов |  `defaults({ a: { b:2 }}, { a: { b:1, c:3 }})` | `{a:{ b:2, c:3 }}`
merge | object | Объединяет рекурсивно 2 и более объектов |  `merge({k: 1}, {v: 'test'}, {k: 2})`
select | mixed | Выбирает значения по ключу (даже вложенные) в объекте(массиве) | `select(obj, 'key.sub.items.1')`
pathToObject | object | Возвращает объект из строчного пути (ключа) | `pathToObject('key.sub', 1)` | {key:{sub:1}}
pick | object | Создает новый объект из "выдернутых" ключей объекта-цели. | `pick({a:1, b:2, c:3}, ['a', 'b'])`
remove | object | Удаляет значения по ключу (даже вложенные) в объекте или массиве | `remove(obj, 'key.sub.items.1')`
values | array | Создает массив из значений перечисляемых свойств `object` | `values('hi')` | `['h','i']`
toQueryString | string | Преобразует объект в закодированную строку запроса | `toQueryString({colors: ['red', 'green', 'blue']}`
toQueryObjects | object | Преобразует `name` - `value` пары в массив объектов с поддержкой вложенных структур | `toQueryObjects('hobbies', ['reading', 'cooking', 'swimming'])`
      
## To
Function | Return | Description | Example
:--- | :--- | :---| :---
toNumber | int|float | Конвертирует `value` в число | `toNumber('3.2') // 3.2`
toArray | array | Конвертирует `value` в массив | `toArray('test') // ['t','e','s','t']`
toFinite | int | Конвертирует `value` в конечное целое число | `toFinite('-3.2') // 3`
toInteger | int | Конвертирует `value` в integer | `toInteger('3.2') // 3`
toString | string | Конвертирует `value` в строку | `toString(1234) // '1234'`

## String
Function | Return | Description
:--- | :---  | :--- 
trim | string |
clearSpaces | string | Удаляет лишние пробельные символы из строки
titleCase | string | Конвертирует первый символ каждого слова в верхний регистр
upperFirst | string | Конвертирует первый символ строки в верхний регистр
startsWith | string | Проверяет, если строка начинается со `string`
endsWith | string | Проверяет, если строка заканчивается на `string`
camelCase | string | Конвертирует {dash/dot/underscore/space}-разделенную строку в camelCase
pascalCase | string | Конвертирует {dash/dot/underscore/space}разделенную строку в PascalCase
hasUnicode | bool | Проверяет, содержится ли в `string` Unicode символы

## Date
Function | Return | Description | Example
:--- | :--- | :--- | :---
elapsed | int | Вернет дельту в милисекундах между дататми
now | date | Текущая дата
toString | string | Преобразование даты в строку

## Format
Function | Return | Description | Example
:--- | :--- | :--- | :---
num | string | Форматирование числа | `num('10000') // '10,000.00'`
numRus | string | Форматирование числа для России | `numRus(1001.20) // '1 001.20'`
fileSize | string | Форматирование числа как размер файла | `fileSize(7900221323) // '7.36 Gb'`
intWord | string | | `intWord(21323) // '21.32K'`
padNumber | string | | `padNumber(2,3) // '002'`
padDateTime | string | | `padDateTime(1) // '01'`

## Utilities
Function | Return | Description
:--- | :--- | :---
utf8ToB64 | string | Кодирует Unicode-строку в base-64 представление
b64ToUtf8 | string | Декодирует строку из base-64 представления в Unicode-строку
times | string | Invokes the iteratee `n` times, returning an array of the results of each invocation


## Structures

- Stack
- Queue

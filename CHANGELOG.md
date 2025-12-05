# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keepachangelog]
and this project adheres to [Semantic Versioning][semver].

## [unreleased]

## [5.0.0] - 2025-12-05

### Added

- [format] New options-object API for `number`, adds `NumberFormatOptions` and `numberRus` preset
- [date] New helpers: `dateToStringUTC`, `parseISO` (strict ISO/RFC3339 parser)
- [is] New predicates: `isBlank`, `isUrl` docs extended; added/clarified predicates for floats, integers, numerics
- [object] New/extended docs and tests for `defaults`, `merge`, `fromQueryString`, `pathToObject`, `values`, `sum`, `logicalAnd`, `getSize`, `toQueryObjects`, `toQueryString`
- [core] New clone strategy based on `structuredClone` with fallback for plain objects/arrays
- [tests] Integration test for imports/typings (`tests/integration/importMu.ts`); extended tests for format/date/is/object
- [docs] Full per-helper documentation in `docs/**` for all functions listed in `docs/README.md` (EN) and
  `docs/ru/README.md` (RU overview)

### Changed

- [core] Drop CJS usage in src; ESM-first package layout, Node >= 22 as minimum runtime
- [object] `merge` and `defaults` made **immutable**, use only own enumerable keys, deep-merge only plain objects; arrays now cloned instead of merged; added proto-pollution guards
- [core] `clone` behavior modernized for Node 22 (uses `structuredClone` where safe; clearer handling of Dates, complex types)
- [date] `elapsed` and `now` simplified; `dateToString` explicitly local, `dateToStringUTC` explicitly UTC
- [format] `number`/`numberRus` now корректно обрабатывают `NaN`, `Infinity`, `-0`; RU‑локаль: запятая как десятичный разделитель, пробел — тысячный
- [is] Ужесточена логика `isNumeric`, `isEven`, других числовых предикатов (используются `Number.isFinite`, явное приведение)
- [object] Использование современных нативных API (`Object.hasOwn`, `Object.values`, `URLSearchParams`) вместо самописных утилит
- [core/object/date/format/is] Масштабное обновление JSDoc и пользовательской документации для отражения новой семантики
- [tests] Jest/ts-jest сконфигурирован на `isolatedModules: true` через `tsconfig.json`

### Fixed

- [format] Исправлена русская локаль в `numberRus` (запятая как десятичный разделитель, пробел как разделитель тысяч)
- [object] Исправлены возможные пути proto-pollution в `fromQueryString`, `pathToObject` и связанных хелперах
- [is] Устранены неточные проверки чисел (отказ от глобального `isNaN`/`isFinite` в пользу `Number.isNaN`/`Number.isFinite`)
- [docs] Устранены расхождения между документацией и кодом, добавлены отсутствующие страницы, обновлены README EN/RU

## [4.7.0] - 2023-11-28

### Added

- [core] Support Node 21

### Removed

- [core] Remove support Node 16|17

## [4.6.0] - 2023-10-21

### Changed

- [core] Changed signature `match`

## [4.5.0] - 2023-07-27

### Added

- [is] Add `isUrl`

## [4.4.0] - 2023-05-03

### Added

- [structures] Add `CollectionArray`

## [4.3.0] - 2023-04-25

### Added

- [chore] Add support Node 20

## [4.2.2] - 2022-11-16

### Added

- [string] Add `normalizeKebab`: Replace non-alphanumeric chars to `-`

## [4.2.0] - 2022-11-16

### Added

- [string] Add `normalizeName` && `normalizeCustom`: Replace non-alphanumeric chars to a defined string and remove
  consecutive duplicates.
- [string] Add `removeConsecutiveDuplicates`: Remove consecutive duplicates
- [string] Add `trimAny`: Trim any characters

## [4.1.0] - 2022-11-10

### Changed

- New package building system

## [4.0.6] - 2022-07-27

### Added

- `isDates` to `is` section

## [4.0.0] - 2022-07-27

### Changed

- Change codebase to TS

// prettier.config.cjs
/**
 * Prettier configuration
 * - JS format allows comments and reuse of named constants
 * - Behavior preserved from the original JSON
 */

const MAX_LINE_LENGTH = 120
const USE_SINGLE_QUOTES = true
const USE_TABS = false
const TAB_SIZE = 2
const USE_SEMICOLONS = false

const BRACKET_SPACING = true
const TRAILING_COMMA_STRATEGY = 'es5' // same as original
const ARROW_PARENS_STYLE = 'avoid' // same as original
const LINE_ENDINGS = 'lf'

/** @type {import('prettier').Config} */
module.exports = {
  // Formatting width and whitespace
  printWidth: MAX_LINE_LENGTH,
  useTabs: USE_TABS,
  tabWidth: TAB_SIZE,
  semi: USE_SEMICOLONS,
  singleQuote: USE_SINGLE_QUOTES,
  // Punctuation and spacing
  bracketSpacing: BRACKET_SPACING,
  trailingComma: TRAILING_COMMA_STRATEGY,
  arrowParens: ARROW_PARENS_STYLE,
  // Cross-platform consistency
  endOfLine: LINE_ENDINGS,
}

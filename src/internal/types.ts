// Numeric represented as a JS number or a stringified number
// Accepts ints, floats, signed values, scientific notation, etc. via template literal `${number}`
export type TextNumber = number | `${number}`
export type TextNumberNullable = TextNumber | null | undefined

export type CollectionType = any[] | Record<PropertyKey, any>

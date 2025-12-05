declare const self: any // безопасно для TS в средах без DOM
declare const window: any // безопасно для TS в средах без window
declare const global: any // безопасно для TS в средах без Node

type Root = typeof globalThis | undefined

const root: Root =
  typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
      ? self
      : typeof window === 'object'
        ? window
        : typeof global === 'object'
          ? global
          : undefined

export default root

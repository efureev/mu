const nowFn = Date.now || (() => new Date().getTime())

/**
 * return Date now
 */
export default function now() {
  return nowFn()
}

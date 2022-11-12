const nowFn = Date.now || (() => new Date().getTime());
/**
 * This function return Date now
 */
export default function now() {
    return nowFn();
}
//# sourceMappingURL=now.mjs.map
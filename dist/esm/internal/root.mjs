const root = typeof globalThis === 'object'
    ? globalThis
    : typeof self === 'object'
        ? self
        : typeof window === 'object'
            ? window
            : typeof global === 'object'
                ? global
                : undefined;
export default root;
//# sourceMappingURL=root.mjs.map
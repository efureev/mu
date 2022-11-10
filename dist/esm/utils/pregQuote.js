export default function pregQuote(string) {
    // Quote regular expression characters
    return string.replace(/([!$()*+.:<=>?[\\\]^{|}])/g, '\\$1');
}
//# sourceMappingURL=pregQuote.js.map
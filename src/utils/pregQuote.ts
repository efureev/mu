export default function pregQuote(string: string) {
  // Quote regular expression characters
  return string.replace(/([!$()*+.:<=>?[\\\]^{|}])/g, '\\$1')
}

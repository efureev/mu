import endsWith from './endsWith';
/**
 * Remove a suffix from a String
 *
 * @param {string} str
 * @param {string} suffix
 * @returns {string}
 */

export default function trimSuffix(str, suffix) {
  if (!str || !suffix || !endsWith(str, suffix)) {
    return str;
  }

  return str.substring(0, str.length - suffix.length);
}
//# sourceMappingURL=trimSuffix.js.map
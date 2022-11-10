import number from './number';
const UnitsDefault = ['', 'K', 'M', 'B', 'T'];
/**
 * Format
 * @param {Number|String} value
 * @param {Array} units
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
export default function intWord(value, units = UnitsDefault, kilo = 1000, decimals = 2, decPoint = '.', thousandsSeparator = ',', suffixSeparator = '') {
    let unit = units.length - 1;
    decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
    for (let i = 0; i < units.length; i++) {
        if (value < kilo ** (i + 1)) {
            unit = i;
            break;
        }
    }
    const humanized = +value / kilo ** unit;
    const suffix = units[unit] ? suffixSeparator + units[unit] : '';
    return number(humanized, decimals, decPoint, thousandsSeparator) + suffix;
}
//# sourceMappingURL=intWord.js.map
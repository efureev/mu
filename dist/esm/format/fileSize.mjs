import intWord from './intWord.mjs';
/**
 * Display
 * @param {Number|String} size
 * @param {Number} kilo
 * @param {Number} decimals
 * @param {String} decPoint
 * @param {String} thousandsSeparator
 * @param {String} suffixSeparator
 * @returns {string}
 */
export default function fileSize(size, kilo = 1024, decimals = 2, decPoint = '.', thousandsSeparator = ',', suffixSeparator = ' ') {
    const num = Number(size);
    if (!Number.isFinite(num) || num <= 0) {
        return '0 bytes';
    }
    const decimalsToUse = num < kilo ? 0 : decimals;
    return intWord(num, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimalsToUse, decPoint, thousandsSeparator, suffixSeparator);
}
//# sourceMappingURL=fileSize.mjs.map
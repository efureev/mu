"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks if string can parse as URL
 *
 * @param {any} str
 * @returns {boolean}
 */
function isUrl(str) {
    let url;
    try {
        url = new URL(str);
    }
    catch (_) {
        return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
}
exports.default = isUrl;
//# sourceMappingURL=isUrl.js.map
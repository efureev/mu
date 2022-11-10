import { padDateTime } from '../format/pad';
/**
 * Date to string
 * @param {Date|null} date
 * @returns {string}
 */
export default function toString(date = new Date()) {
    return (date.getFullYear() +
        '-' +
        padDateTime(date.getMonth() + 1) +
        '-' +
        padDateTime(date.getDate()) +
        'T' +
        padDateTime(date.getHours()) +
        ':' +
        padDateTime(date.getMinutes()) +
        ':' +
        padDateTime(date.getSeconds()));
}
//# sourceMappingURL=toString.js.map
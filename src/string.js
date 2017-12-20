µ.str = µ.str || {};

µ.str = (function () {

    var
        reTrim = /^\s+|\s+$/g,

        latRus = {
            "A": "А",
            "a": "а",
            "E": "Е",
            "e": "е",
            "T": "Т",
            "y": "у",
            "O": "О",
            "o": "о",
            "P": "Р",
            "p": "р",
            "H": "Н",
            "K": "К",
            "X": "Х",
            "x": "х",
            "C": "С",
            "c": "с",
            "B": "В",
            "M": "М"
        },

        str    = {

            /**
             * Removes leading and trailing whitespace or specified characters from `string`.
             *
             * @static
             * @memberOf µ
             * @category String
             *
             * @param {string} [string=''] The string to trim.
             *
             * @returns {string} Returns the trimmed string.
             * @example
             *
             * µ.utils.trim('  abc  ');
             * // => 'abc'
             *
             */
            trim: function (string) {
                string = µ.utils.toString(string);

                if (!string) {
                    return string;
                }
                return string.replace(reTrim, '');
            },

            /**
             * Заменяет похожие с русскими латинские буквы на русские.
             *
             * @param str
             * @returns {{trim: µ.trim, lat2Rus: str.lat2Rus}}
             */
            lat2Rus: function (str) {
                if (!µ.isEmpty(str)) {

                    for (var key in latRus) {
                        var r = new RegExp(key, 'g');
                        str = str.replace(r, latRus[key]);
                    }
                }

                return str;
            },

            /**
             * Конвертирует строку из camelCase
             *
             * @param {string} str
             * @param {string} separator
             * @returns {string}
             */
            fromCamelCase: function (str, separator) {
                if (separator === undefined) {
                    separator = '_';
                }

                return str
                    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
                    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
                    .toLowerCase();
            },

            /**
             *
             * @param str
             * @returns {string | void}
             */
            toCamelCase: function (str) {
                return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2, offset) {
                    return p2 ? p2.toUpperCase() : p1.toLowerCase()
                });
            },

            /**
             * Обрезение строки по количеству символов
             * @param {string} str
             * @param {number} num
             * @param {string} more
             * @returns {string}
             */
            truncate: function (str, num, more) {
                if (!more) {
                    more = '...'
                }
                var ml = more.length;
                return str.length > num ? str.slice(0, num > ml ? num - ml : num) + more : str;
            }

        };

    return str;
})();

µ.string = µ.str;
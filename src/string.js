µ.str = µ.str || {};

µ.str = (function () {

	var
		reTrim = /^\s+|\s+$/g,

        latRus = { "A": "А", "a": "а", "E": "Е", "e": "е", "T": "Т", "y": "у", "O": "О", "o": "о", "P": "Р", "p": "р", "H": "Н", "K": "К", "X": "Х", "x": "х", "C": "С", "c": "с", "B": "В", "M": "М" },

		str = {

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
             * @param string
             * @returns {{trim: µ.trim, lat2Rus: str.lat2Rus}}
             */
			lat2Rus: function (string) {
                if (!µ.isEmpty(string)) {

                    for (var key in latRus) {
                        var r = new RegExp(key, 'g');
                        str = str.replace(r, obj[key]);
                    }
                }

                return str;
			}

		};

	return str;
})();
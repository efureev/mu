µ.utils = µ.utils || {};

µ.utils = (function () {

    var INFINITY = 1 / 0,

        m        = {
            /**
             * Converts `value` to a string if it's not one. An empty string is returned
             * for `null` and `undefined` values. The sign of `-0` is preserved.
             *
             * @static
             * @memberOf µ
             * @category µ.utils
             * @param {*} value The value to process.
             * @returns {string} Returns the string.
             * @example
             *
             * µ.utils.toString(null);
             * // => ''
             *
             * µ.utils.toString(-0);
             * // => '-0'
             *
             * µ.utils.toString([1, 2, 3]);
             * // => '1,2,3'
             */
            toString: function (value) {
                if (µ.isString(value)) {
                    return value;
                }
                if (µ.isEmpty(value)) {
                    return '';
                }
                var result = (value + '');
                return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
            },


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
                return µ.str.trim(string);
            },

            /**
             * Заполняет недостающие символы к определенной длинне
             *
             * @example str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT'); // '-=-=-=-=-=-Kevin van Zonneveld'
             * @example str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');  // '------Kevin van Zonneveld-----'
             *
             * @param {string} input
             * @param {number} pad_length    Длинна строки
             * @param {string} pad_string    Чем заолнять
             * @param {string} pad_type Тип заполнения: 'STR_PAD_LEFT'|'STR_PAD_RIGHT'|'STR_PAD_BOTH'
             * @returns {string}
             */
            str_pad: function (input, pad_length, pad_string, pad_type) {

                var half = '',
                    pad_to_go;

                var str_pad_repeater = function (s, len) {
                    var collect = '';

                    while (collect.length < len) {
                        collect += s;
                    }
                    collect = collect.substr(0, len);

                    return collect;
                };

                input += '';
                pad_string = pad_string !== undefined ? pad_string : ' ';

                if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
                    pad_type = 'STR_PAD_RIGHT';
                }
                if ((pad_to_go = pad_length - input.length) > 0) {
                    if (pad_type === 'STR_PAD_LEFT') {
                        input = str_pad_repeater(pad_string, pad_to_go) + input;
                    } else if (pad_type === 'STR_PAD_RIGHT') {
                        input = input + str_pad_repeater(pad_string, pad_to_go);
                    } else if (pad_type === 'STR_PAD_BOTH') {
                        half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
                        input = half + input + half;
                        input = input.substr(0, pad_length);
                    }
                }

                return input;
            },
            /**
             * Добавляет ведущий ноль
             *
             * @param n
             * @returns {*}
             */
            pad    : function (n) {
                return n < 10 ? '0' + n.toString(10) : n.toString(10);
            },

            /**
             * Getting an absolute URL
             * @Example:
             *    getAbsoluteUrl('/something');
             *
             * @returns {Function}
             */
            getAbsoluteUrl: function () {
                var a;

                return function (url) {
                    if (!a) a = document.createElement('a');
                    a.href = url;

                    return a.href;
                };
            }

        };

    return m;
})();
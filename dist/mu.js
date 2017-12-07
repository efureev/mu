var µ = µ || {};

(function () {
    var global = typeof self == 'object' && self.self === self && self ||
        typeof global === 'object' && global.global === global && global ||
        this;

    µ.global = global;

    µ.DEBUG = false;
    µ.VERSION = '0.0.8';

    µ.apply = function (object, config, defaults) {
        if (defaults) {
            µ.apply(object, defaults);
        }

        if (object && config && typeof config === 'object') {
            for (var i in config) {
                object[i] = config[i];
            }
        }

        return object;
    };

    µ.isBrowser = function () {
        return !(typeof exports !== 'undefined' && !exports.nodeType);
    };

    if (µ.isBrowser()) {
        global.µ = µ;
    } else {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = µ;
        }
        exports.µ = µ;
    }

})();
var toString    = Object.prototype.toString,
    enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor'],

    core        = {
        /**
         *
         * @param value
         * @returns {boolean}
         */
        isUndefined: function (value) {
            return value === void 0;
        },

        /**
         * Возвращает `true` если значение определенно
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isDefined: function (value) {
            return !this.isUndefined(value);
        },

        /**
         * Возвращает `true` если значение NULL
         * @param value
         * @returns {boolean}
         */
        isNull: function (value) {
            return value === null;
        },

        isDate: function (value) {
            return toString.call(value) === '[object Date]';
        },

        /**
         *
         * @param value
         * @returns {boolean}
         */
        isObject: (toString.call(null) === '[object Object]') ?
            function (value) {
                // check ownerDocument here as well to exclude DOM nodes
                return value !== null && value !== undefined && toString.call(value) === '[object Object]' && value.ownerDocument === undefined;
            } :
            function (value) {
                return toString.call(value) === '[object Object]';
            },

        /**
         *
         * @param obj
         * @returns {boolean}
         */
        isBoolean: function (obj) {
            return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
        },

        /**
         * Возвращает `true` если значение число
         * @param value
         * @returns {boolean}
         */
        isNumber: function (value) {
            return typeof value === 'number' && isFinite(value);
        },

        /**
         * Проверяет, что число - цифра
         * @param value
         * @returns {boolean}
         */
        isNumeric: function (value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },


        /**
         * Возвращает `true` если значение - строка
         * @param {Object} value The value to test.
         * @return {Boolean}
         */
        isString: function (value) {
            return typeof value === 'string';
        },

        /**
         * Noop fn
         */
        noop: function () {
        },

        /**
         * Возвращает true  если значение пустое, false если нет. Значение будет пусто при:
         *
         * - `null`
         * - `undefined`
         * - `[]` //пустой массив (array)
         * - `''` //пустая строка, если не `allowEmptyString` == `true`
         * - `{}` //пустой Объект
         *
         * @param {Object} value Значение для проверки
         * @param {Boolean} [allowEmptyString=false] `true` для разрешения пустых строк
         * @return {Boolean}
         */
        isEmpty: function (value, allowEmptyString) {
            return (value == null) || (!allowEmptyString ? value === '' : false) || this.isEmptyObject(value) || (this.isArray(value) && value.length === 0);
        },

        /**
         *
         * @param obj
         * @returns {boolean}
         */
        isEmptyObject: function (obj) {
            if (!this.isObject(obj))
                return false;

            for (var key in obj)
                return false;
            return true;
        },

        isFunction: function (obj) {
            return typeof obj == 'function' || false;
        },

        /**
         * Нативная функция или нет (полезно для переопределения)
         * @param value
         * @returns {*}
         */
        isNative: function (value) {
            var reNative = new RegExp('^' +
                String(toString)
                    .replace(/[.*+?^${}()|[\]\/\\]/g, '\\$&')
                    .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
                type     = typeof value;

            return type == 'function'
                ? reNative.test(Function.prototype.toString.call(value))
                : (value && type == 'object' && /^\[object .+?Constructor\]$/.test(toString.call(value))) || false;
        },

        /**
         *
         * @param obj
         * @param key
         * @returns {boolean|*}
         */
        has: function (obj, key) {
            return obj != null && hasOwnProperty.call(obj, key);
        },

        /**
         * get the current timestamp as an integer
         */
        now: Date.now || function () {
            return new Date().getTime();
        },

        /**
         * Возвращает `true` если значение JavaScript Array.
         *
         * @param {Object} target Цель для проверки.
         * @return {Boolean}
         * @method
         */
        isArray: ('isArray' in Array) ? Array.isArray : function (value) {
            return toString.call(value) === '[object Array]';
        },

        /**
         * Клонирование простых переменных, включая массивы, {}-похожие объекты, DOM nodes и Даты.
         *
         * @param {Object} item The variable to clone
         * @return {Object} clone
         */
        clone: function (item) {
            if (item === null || item === undefined) {
                return item;
            }

            // DOM nodes
            // TODO proxy this to Ext.Element.clone to handle automatic id attribute changing
            // recursively
            if (item.nodeType && item.cloneNode) {
                return item.cloneNode(true);
            }

            var type = toString.call(item),
                i, j, k, clone, key;

            // Date
            if (type === '[object Date]') {
                return new Date(item.getTime());
            }

            // Array
            if (type === '[object Array]') {
                i = item.length;

                clone = [];

                while (i--) {
                    clone[i] = µ.clone(item[i]);
                }
            }
            // Object
            else if (type === '[object Object]' && item.constructor === Object) {
                clone = {};

                for (key in item) {
                    clone[key] = µ.clone(item[key]);
                }

                if (enumerables) {
                    for (j = enumerables.length; j--;) {
                        k = enumerables[j];
                        if (item.hasOwnProperty(k)) {
                            clone[k] = item[k];
                        }
                    }
                }
            }

            return clone || item;
        }
    };

µ.apply(µ, core);
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
			}

		};

	return str;
})();
µ.array = µ.array || {};

µ.array = (function () {

	var utilArray,
		erase = function (array, index, removeCount) {
			array.splice(index, removeCount);
			return array;
		};

		return utilArray = {

			/**
			 * Возвращает индекс элемента найденного элемента в массиве. Если не найден, вернет "-1"
			 *
			 * `µ.array.index([1,2,4,2],2)`
			 *
			 * @param {Array} array The array to check.
			 * @param {Object} item The item to find.
			 * @param {Number} from (Optional) The index at which to begin the search.
			 * @return {Number} The index of item in the array (or -1 if it is not found).
			 */
			index: 'indexOf' in Array.prototype ? function (array, item, from) {
				return Array.prototype.indexOf.call(array, item, from);
			} : function (array, item, from) {
				var i, length = array.length;

				for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
					if (array[i] === item) {
						return i;
					}
				}

				return -1;
			},

			/**
			 * Возвращает новый массив с уникальными значениями
			 *
			 * `µ.array.unique([1,2,4,2])`
			 *
			 * @param {Array} array
			 * @return {Array} results
			 */
			unique: function (array) {
				var clone = [],
					i = 0,
					ln = array.length,
					item;

				for (; i < ln; i++) {
					item = array[i];

					if (utilArray.index(clone, item) === -1) {
						clone.push(item);
					}
				}

				return clone;
			},

			/**
			 * Объединяет несколько массивов в один с уникальностью значений
			 *
			 * @example
			 * µ.array.merge();
			 *
			 * @param {Array} array1
			 * @param {Array} array2
			 * @param {Array} etc
			 * @return {Array} merged
			 */
			merge: function() {
				var args = slice.call(arguments),
					array = [],
					i, ln;

				for (i = 0, ln = args.length; i < ln; i++) {
					array = array.concat(args[i]);
				}

				return utilArray.unique(array);
			},


			/**
			 * Делает из строки массив (аналог PHP.explode)
			 *
			 * `µ.array.explode(',','one,two,three')`
			 * `µ.array.explode(',','one,two,three',2)`
			 *
			 */
			/**
			 *
			 * @param delimiter
			 * @param string
			 * @param limit
			 * @returns {Array}
			 */
			explode: function (delimiter, string, limit) {
				//  discuss at: http://phpjs.org/functions/explode/

				if (arguments.length < 2 || µ.isUndefined(delimiter) || µ.isUndefined(string))
					return null;

				if (µ.isEmpty(delimiter))
					return false;

				if (µ.isFunction(delimiter) || µ.isObject(delimiter) || µ.isFunction(string) || µ.isObject(string))
					return [''];

				if (delimiter === true)
					delimiter = '1';

				delimiter += '';
				string += '';

				var s = string.split(delimiter);

				if (µ.isUndefined(limit))
					return s;

				// Support for limit
				if (limit === 0)
					limit = 1;

				// Positive limit
				if (limit > 0) {
					if (limit >= s.length) return s;
					return s.slice(0, limit - 1)
						.concat([s.slice(limit - 1)
							.join(delimiter)
						]);
				}

				// Negative limit
				if (-limit >= s.length) return [];

				s.splice(s.length + limit);
				return s;
			},

			/**
			 * Фильтрует массив и удаляет пустые элементы, как определяет {@link µ.utils.isEmpty}.
			 *
			 * `µ.array.clean([1,2,3,'',null,2])`
			 *
			 * @param {Array} array
			 * @return {Array} results
			 */
			clean: function (array) {
				var results = [],
					i = 0,
					ln = array.length,
					item;

				for (; i < ln; i++) {
					item = array[i];

					if (!µ.isEmpty(item)) {
						results.push(item);
					}
				}

				return results;
			},

			/**
			 *
			 * @param array
			 */
			last: function (array) {
				return array.pop();
			},

			/**
			 *
			 * @param array
			 */
			first: function (array) {
				return array.shift();
			},

			/**
			 * Удаляет элемент из массива если существует
			 *
			 * @param {Array} array
			 * @param {Object} item
			 * @return {Array}
			 */
			remove: function (array, item) {
				var index = this.index(array, item);

				if (index !== -1) {
					erase(array, index, 1);
				}

				return array;
			},

			/**
			 * Сравнивает содержание двух массивов используя строгое сравнение
			 *
			 * @param {Array} array1
			 * @param {Array} array2
			 * @return {Boolean} `true` if the arrays are equal.
			 */
			equals: function(array1, array2) {
				var len1 = array1.length,
					len2 = array2.length,
					i;

				// Short circuit if the same array is passed twice
				if (array1 === array2) {
					return true;
				}

				if (len1 !== len2) {
					return false;
				}

				for (i = 0; i < len1; ++i) {
					if (array1[i] !== array2[i]) {
						return false;
					}
				}

				return true;
			}
		};
})();
µ.format = µ.format || {};

µ.format = (function () {
	var currencySign = 'р.',
		currencyPrecision = 2,
		currencyAtEnd = true,
		thousandSeparator = ' ',
		decimalSeparator = '.',
		formatCleanRe = /[^\d\.]/g;

	return muFormat = {

		/**
		 * Форматирует число как Валюту
		 * @param {Number/String} v Число для конвертирования
		 * @param {String} [currSign] Денежный знак для использования (по-умолчанию, {@link #currencySign})
		 * @param {Number} [decimals] Количество знаков после запятой (по-умолчанию, {@link #currencyPrecision})
		 * @param {Boolean} [start] True если {@link #currencySign} должен стоять в начале строки (по-умолчанию, {@link #currencyAtEnd})
		 * @return {String} Валюта
		 */
		currency: function (v, currSign, decimals, start) {
			var negativeSign = '',
				format = ",0",
				i = 0;
			v = +v;

			if (v < 0) {
				v = -v;
				negativeSign = '-';
			}

			decimals = µ.isDefined(decimals) ? decimals : currencyPrecision;

			format += (decimals > 0 ? '.' : '');

			for (; i < decimals; i++) {
				format += '0';
			}

			v = muFormat.number(v, format);

			if ((start || !currencyAtEnd) === true) {
				return (currSign || currencySign) + ' ' + negativeSign + v;
			} else {
				return negativeSign + v + ' ' + (currSign || currencySign);
			}
		},

		/**
		 *  # <p>Formats the passed number according to the passed format string.</p>
		 # <p>The number of digits after the decimal separator character specifies the number of
		 # decimal places in the resulting string. The <u>local-specific</u> decimal character is used in the result.</p>
		 # <p>The <i>presence</i> of a thousand separator character in the format string specifies that
		 # the <u>locale-specific</u> thousand separator (if any) is inserted separating thousand groups.</p>
		 # <p>By default, "," is expected as the thousand separator, and "." is expected as the decimal separator.</p>
		 # <p><b>New to Ext4</b></p>
		 # <p>Locale-specific characters are always used in the formatted output when inserting
		 # thousand and decimal separators.</p>
		 # <p>The format string must specify separator characters according to US/UK conventions ("," as the
		 # thousand separator, and "." as the decimal separator)</p>
		 # <p>To allow specification of format strings according to local conventions for separator characters, add
		 # the string <code>/i</code> to the end of the format string.</p>
		 # <div style="margin-left:40px">examples (123456.789):
		 # <div style="margin-left:10px">
		 # 0 - (123456) show only digits, no precision<br>
		 # 0.00 - (123456.78) show only digits, 2 precision<br>
		 # 0.0000 - (123456.7890) show only digits, 4 precision<br>
		 # 0,000 - (123,456) show comma and digits, no precision<br>
		 # 0,000.00 - (123,456.78) show comma and digits, 2 precision<br>
		 # 0,0.00 - (123,456.78) shortcut method, show comma and digits, 2 precision<br>
		 # To allow specification of the formatting string using UK/US grouping characters (,) and decimal (.) for international numbers, add /i to the end.
		 # For example: 0.000,00/i
		 # </div></div>
		 # @param {Number} v The number to format.
		 # @param {String} format The way you would like to format this text.
		 # @return {String} The formatted number.

		 * @param v
		 * @param formatString
		 * @returns {*}
		 */
		number: function (v, formatString, afterFix) {
			var cnum, comma, dec, fnum, hasComma, i, i18n, j, m, n, neg, parr, psplit;

			if (µ.isUndefined(formatString))
				return v;

			v = muFormat.from(v, NaN);
			if (isNaN(v))
				return "";

			comma = thousandSeparator;
			dec = decimalSeparator;
			i18n = false;
			neg = v < 0;
			v = Math.abs(v);

			hasComma = formatString.indexOf(",") !== -1;
			psplit = formatString.replace(formatCleanRe, "").split(".");

			if (1 < psplit.length) {
				v = v.toFixed(psplit[1].length);
			} else if (2 < psplit.length) {
				console.error("Invalid number format, should have no more than 1 decimal");
			} else {
				v = v.toFixed(0);
			}

			fnum = v.toString();
			psplit = fnum.split(".");

			if (hasComma) {
				cnum = psplit[0];
				parr = [];
				j = cnum.length;
				m = Math.floor(j / 3);
				n = cnum.length % 3 || 3;
				i = 0;

				while (i < j) {
					if (i !== 0) n = 3;
					parr[parr.length] = cnum.substr(i, n);
					m -= 1;
					i += n;
				}

				fnum = parr.join(comma);
				if (psplit[1]) fnum += dec + psplit[1];
			} else {
				if (psplit[1]) fnum = psplit[0] + dec + psplit[1];
			}

			if (neg) neg = fnum.replace(/[^1-9]/g, "") !== "";

			return (neg ? "-" : "") + formatString.replace(/[\d,?\.?]+/, fnum) + (µ.isUndefined(afterFix) ? '' : afterFix);
		},

		/**
		 * Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if
		 * it is not.

		 µ.format.number.from('1.23', 1); // returns 1.23
		 µ.format.number.from('abc', 1); // returns 1
		 µ.format.number.from(NaN, 1); // returns 1

		 * @param {Object} value
		 * @param {Number} defaultValue The value to return if the original value is non-numeric
		 * @return {Number} value, if numeric, defaultValue otherwise
		 */
		from: function (value, defaultValue) {
			if (isFinite(value)) {
				value = parseFloat(value);
			}

			return !isNaN(value) ? value : defaultValue;
		},

		/**
		 * Округление цисла с требуемым десятичным числом в большую сторону
		 *
		 * @param {Number/String} value The numeric value to round.
		 * @param {Number} [precision] The number of decimal places to which to round the
		 * first parameter's value. If `undefined` the `value` is passed to `Math.round`
		 * otherwise the value is returned unmodified.
		 * @return {Number} The rounded value.
		 */
		round: function (value, precision) {
			var result = Number(value);
			if (µ.isNumber(precision)) {
				precision = Math.pow(10, precision);
				result = Math.round(value * precision) / precision;
			} else if (µ.isUndefined(precision)) {
				result = Math.round(result);
			}
			return result;
		}
	};
})();
µ.event = µ.event || {};

µ.event = (function () {

    return muEvent = {
        /**
         * Функция, которая выполняется только один раз
         * @param fn
         * @param context
         */
        once: function (fn, context) {
            var result;

            return function () {
                if (fn) {
                    result = fn.apply(context || this, arguments);
                    fn = null;
                }

                return result;
            }
        },

        /**
         * Возвращает функцию, которая не будет срабатывать, пока продолжает вызываться.
         * Она сработает только один раз через N миллисекунд после последнего вызова.
         * Если ей передан аргумент `immediate`, то она будет вызвана один раз сразу после первого запуска.
         *
         * @example:
         *        var myEfficientFn = debounce(function() {
			 *			//...
			 *	 	}, 250);
         *        window.addEventListener('resize', myEfficientFn);

         * @param func
         * @param wait
         * @param immediate
         * @returns {Function}
         */
        debounce: function (func, wait, immediate) {
            var timeout;

            return function () {
                var context = this,
                    args    = arguments,
                    later   = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    },
                    callNow = immediate && !timeout;

                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow)
                    func.apply(context, args);
            };
        },

        /**
         * @param {function} onOfflineFn Выполняется при оффлайне
         * @param {function} onOnlineFn Выполняется при онлайне
         * @returns {boolean}
         */
        offLine: function (onOfflineFn, onOnlineFn) {
            if (!µ.isBrowser())
                return false;

            window.addEventListener('load', function () {
                if (µ.isFunction(onOfflineFn)) {
                    window.addEventListener('online', onOnlineFn);
                }
                if (µ.isFunction(onOfflineFn)) {
                    window.addEventListener('offline', onOfflineFn);
                }
            });

        }

    };
})();
µ.date = µ.date || {};

µ.date = (function () {

	var
		utilDate,
		now = (function () {
			if (!Date.now) {
				Date.now = function now() {
					return new Date().getTime();
				};
			}
		}());

	return utilDate = {
		now: Date.now,

		/**
		 * @private
		 */
		toString: function (date) {
			if (!date) {
				date = new Date();
			}

			return date.getFullYear() + "-"
				+ µ.utils.pad(date.getMonth() + 1, 2, '0') + "-"
				+ µ.utils.pad(date.getDate(), 2, '0') + "T"
				+ µ.utils.pad(date.getHours(), 2, '0') + ":"
				+ µ.utils.pad(date.getMinutes(), 2, '0') + ":"
				+ µ.utils.pad(date.getSeconds(), 2, '0');
		},

		/**
		 * Date interval constant.
		 * @type String
		 */
		MILLI: "ms",

		/**
		 * Date interval constant.
		 * @type String
		 */
		SECOND: "s",

		/**
		 * Date interval constant.
		 * @type String
		 */
		MINUTE: "mi",

		/** Date interval constant.
		 * @type String
		 */
		HOUR: "h",

		/**
		 * Date interval constant.
		 * @type String
		 */
		DAY: "d",

		/**
		 * Date interval constant.
		 * @type String
		 */
		MONTH: "mo",

		/**
		 * Date interval constant.
		 * @type String
		 */
		YEAR: "y",


		/**
		 * @property {String[]} dayNames
		 * An array of textual day names.
		 * Override these values for international dates.
		 *
		 * @Example:
		 *
		 *     µ.date.dayNames = [
		 *         'SundayInYourLang',
		 *         'MondayInYourLang'
		 *         // ...
		 *     ];
		 */
		dayNames: [
			"Воскресенье",
			"Понедельник",
			"Вторник",
			"Среда",
			"Четверг",
			"Пятница",
			"Суббота"
		],

		/**
		 * @property {String[]} monthNames
		 * An array of textual month names.
		 * Override these values for international dates.
		 *
		 * @Example:
		 *
		 *     µ.date.monthNames = [
		 *         'JanInYourLang',
		 *         'FebInYourLang'
		 *         // ...
		 *     ];
		 */
		monthNames: [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь"
		],

		/**
		 * @property {Object} monthNumbers
		 * An object hash of zero-based JavaScript month numbers (with short month names as keys).
		 *
		 * __Note:__ keys are case-sensitive.
		 *
		 * Override these values for international dates.
		 *
		 * @Example:
		 *
		 *     µ.date.monthNumbers = {
		 *         'LongJanNameInYourLang': 0,
		 *         'ShortJanNameInYourLang':0,
		 *         'LongFebNameInYourLang':1,
		 *         'ShortFebNameInYourLang':1
		 *         // ...
		 *     };
		 */
		monthNumbers: {
			'Январь': 0,
			'Янв': 0,
			'Февраль': 1,
			'Фев': 1,
			'Март': 2,
			'Мар': 2,
			'Апрель': 3,
			'Апр': 3,
			'Май': 4,
			'Июнь': 5,
			'Июн': 5,
			'Июль': 6,
			'Июл': 6,
			'Август': 7,
			'Авг': 7,
			'Сентябрь': 8,
			'Сент': 8,
			'Октябрь': 9,
			'Окт': 9,
			'Ноябрь': 10,
			'Ноя': 10,
			'Декабрь': 11,
			'Дек': 11
		},

		/**
		 * Возвращает количество миллисекунд между двумя датами
		 *
		 * @param {Date} dateA The first date.
		 * @param {Date} [dateB=new Date()] (optional) The second date.
		 * @return {Number} The difference in milliseconds
		 */
		getElapsed: function (dateA, dateB) {
			return Math.abs(dateA - (dateB || utilDate.now));
		},

		/**
		 * Возвращает короткое наименование месяца
		 *
		 * @param {Number} month A zero-based JavaScript month number.
		 * @return {String} The short month name.
		 */
		getShortMonthName: function (month) {
			return utilDate.monthNames[month].substring(0, 3);
		},

		/**
		 * Возвращает короткое наименование дня недели
		 *
		 * @param {Number} day A zero-based JavaScript day number.
		 * @return {String} The short day name.
		 */
		getShortDayName: function (day) {
			return utilDate.dayNames[day].substring(0, 3);
		},

		/**
		 * Возвращает номер месяца (0 - это январь)
		 *
		 * @param {String} name The short/full month name.
		 * @return {Number} The zero-based JavaScript month number.
		 */
		getMonthNumber: function (name) {
			return utilDate.monthNumbers[name.substring(0, 1).toUpperCase() + name.substring(1, 3).toLowerCase()];
		},

		/**
		 * Сравнивает две даты на полную эквивалентность
		 *
		 * @param {Date} date1
		 * @param {Date} date2
		 * @return {Boolean} `true` if the date values are equal
		 */
		isEqual: function (date1, date2) {
			if (date1 && date2) {
				return (date1.getTime() === date2.getTime());
			}
			return !(date1 || date2);
		},

		/**
		 * Создает копию даты
		 *
		 * Dates are copied and passed by reference, so if a copied date variable is modified later, the original
		 * variable will also be changed.  When the intention is to create a new variable that will not
		 * modify the original instance, you should create a clone.
		 *
		 * Example of correctly cloning a date:
		 *
		 *     //wrong way:
		 *     var orig = new Date('10/1/2006');
		 *     var copy = orig;
		 *     copy.setDate(5);
		 *     console.log(orig);  // returns 'Thu Oct 05 2006'!
		 *
		 *     //correct way:
		 *     var orig = new Date('10/1/2006'),
		 *         copy = µ.date.clone(orig);
		 *     copy.setDate(5);
		 *     console.log(orig);  // returns 'Thu Oct 01 2006'
		 *
		 * @param {Date} date The date.
		 * @return {Date} The new Date instance.
		 */
		clone: function (date) {
			return new Date(date.getTime());
		},

		/**
		 * Возвращает номер дня в году
		 *
		 *     @example
		 *     var dt = new Date('9/17/2011');
		 *     console.log(µ.date.getDayOfYear(dt)); // 259
		 *
		 * @param {Date} date The date
		 * @return {Number} 0 to 364 (365 in leap years).
		 */
		getDayOfYear: function (date) {
			var num = 0,
				d = utilDate.clone(date),
				m = date.getMonth(),
				i;

			for (i = 0, d.setDate(1), d.setMonth(0); i < m; d.setMonth(++i)) {
				num += utilDate.getDaysInMonth(d);
			}
			return num + date.getDate() - 1;
		},

		/**
		 * Возвращает номер недели в году
		 *
		 *     @example
		 *     var dt = new Date('9/17/2011');
		 *     console.log(µ.date.getWeekOfYear(dt)); // 37
		 *
		 * @param {Date} date The date.
		 * @return {Number} 1 to 53.
		 * @method
		 */
		getWeekOfYear: (function () {
			var ms1d = 864e5, // milliseconds in a day
				ms7d = 7 * ms1d; // milliseconds in a week

			return function (date) { // return a closure so constants get calculated only once
				var DC3 = nativeDate.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 3) / ms1d, // an Absolute Day Number
					AWN = Math.floor(DC3 / 7), // an Absolute Week Number
					Wyr = new Date(AWN * ms7d).getUTCFullYear();

				return AWN - Math.floor(Date.UTC(Wyr, 0, 7) / ms7d) + 1;
			};
		}()),

		/**
		 * Возвращает первый день месяца даты
		 *
		 * The returned value is the numeric day index within the week (0-6) which can be used in conjunction with
		 * the {@link #monthNames} array to retrieve the textual day name.
		 *
		 *      @example
		 *      var dt = new Date('1/10/2007'),
		 *          firstDay = µ.date.getFirstDayOfMonth(dt);
		 *      console.log(µ.date.dayNames[firstDay]); // output: 'Monday'
		 *
		 * @param {Date} date The date
		 * @return {Number} The day number (0-6).
		 */
		getFirstDayOfMonth: function (date) {
			var day = (date.getDay() - (date.getDate() - 1)) % 7;
			return (day < 0) ? (day + 7) : day;
		},

		/**
		 * Возвращает последний день месяца даты.  The returned value
		 * is the numeric day index within the week (0-6) which can be used in conjunction with
		 * the {@link #monthNames} array to retrieve the textual day name.
		 *
		 *      @example
		 *      var dt = new Date('1/10/2007'),
		 *          lastDay = µ.date.getLastDayOfMonth(dt);
		 *
		 *      console.log(µ.date.dayNames[lastDay]); // output: 'Wednesday'
		 *
		 * @param {Date} date The date
		 * @return {Number} The day number (0-6).
		 */
		getLastDayOfMonth: function (date) {
			return utilDate.getLastDateOfMonth(date).getDay();
		},

		/**
		 * Возвращает количество дней в месяце
		 *
		 * @param {Date} date The date
		 * @return {Number} The number of days in the month.
		 * @method
		 */
		getDaysInMonth: (function () {
			var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			return function (date) {
				var m = date.getMonth();
				return m === 1 && utilDate.isLeapYear(date) ? 29 : daysInMonth[m];
			};
		}()),

		/**
		 * Возвращает дату с первым днем месяца даты
		 *
		 * @param {Date} date The date
		 * @return {Date}
		 */
		getFirstDateOfMonth: function (date) {
			return new Date(date.getFullYear(), date.getMonth(), 1);
		},

		/**
		 * Возвращает дату с последним днем месяца даты
		 *
		 * @param {Date} date The date
		 * @return {Date}
		 */
		getLastDateOfMonth: function (date) {
			return new Date(date.getFullYear(), date.getMonth(), utilDate.getDaysInMonth(date));
		},


		/**
		 * Проверка на високосный год
		 *
		 *     @example
		 *     var dt = new Date('1/10/2011');
		 *     console.log(µ.date.isLeapYear(dt)); // false
		 *
		 * @param {Date} date The date
		 * @return {Boolean} `true` if the current date falls within a leap year, `false` otherwise.
		 */
		isLeapYear: function (date) {
			var year = date.getFullYear();
			return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
		},

		/**
		 * Очистка времени у даты
		 *
		 * __Note:__ DST timezone information for the browser's host operating system is assumed to be up-to-date.
		 * @param {Date} date The date
		 * @param {Boolean} [clone=false] `true` to create a clone of this date, clear the time and return it.
		 * @return {Date} this or the clone.
		 */
		clearTime: function (date, clone) {
			if (isNaN(date.getTime())) {
				return date;
			}

			if (clone) {
				return utilDate.clearTime(utilDate.clone(date));
			}

			var d = date.getDate(),
				hr,
				c;

			// clear time
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);

			if (date.getDate() !== d) { // account for DST (i.e. day of month changed when setting hour = 0)
				// note: DST adjustments are assumed to occur in multiples of 1 hour (this is almost always the case)
				// refer to http://www.timeanddate.com/time/aboutdst.html for the (rare) exceptions to this rule

				// increment hour until cloned date == current date
				for (hr = 1, c = utilDate.add(date, utilDate.HOUR, hr); c.getDate() !== d; hr++, c = utilDate.add(date, utilDate.HOUR, hr));

				date.setDate(d);
				date.setHours(c.getHours());
			}

			return date;
		},

		/**
		 * Provides a convenient method for performing basic date arithmetic. This method
		 * does not modify the Date instance being called - it creates and returns
		 * a new Date instance containing the resulting date value.
		 *
		 * @Examples:
		 *
		 *     // Basic usage:
		 *     var dt = µ.date.add(new Date('10/29/2006'), µ.date.DAY, 5);
		 *     console.log(dt); // returns 'Fri Nov 03 2006 00:00:00'
		 *
		 *     // Negative values will be subtracted:
		 *     var dt2 = µ.date.add(new Date('10/1/2006'), µ.date.DAY, -5);
		 *     console.log(dt2); // returns 'Tue Sep 26 2006 00:00:00'
		 *
		 *      // Decimal values can be used:
		 *     var dt3 = µ.date.add(new Date('10/1/2006'), µ.date.DAY, 1.25);
		 *     console.log(dt3); // returns 'Mon Oct 02 2006 06:00:00'
		 *
		 * @param {Date} date The date to modify
		 * @param {String} interval A valid date interval enum value.
		 * @param {Number} value The amount to add to the current date.
		 * @return {Date} The new Date instance.
		 */
		add: function (date, interval, value) {
			var d = utilDate.clone(date),
				day, decimalValue, base = 0;
			if (!interval || value === 0) {
				return d;
			}

			decimalValue = value - parseInt(value, 10);
			value = parseInt(value, 10);

			if (value) {
				switch (interval.toLowerCase()) {
					case utilDate.MILLI:
						d.setTime(d.getTime() + value);
						break;
					case utilDate.SECOND:
						d.setTime(d.getTime() + value * 1000);
						break;
					case utilDate.MINUTE:
						d.setTime(d.getTime() + value * 60 * 1000);
						break;
					case utilDate.HOUR:
						d.setTime(d.getTime() + value * 60 * 60 * 1000);
						break;
					case utilDate.DAY:
						d.setDate(d.getDate() + value);
						break;
					case utilDate.MONTH:
						day = date.getDate();
						if (day > 28) {
							day = Math.min(day, utilDate.getLastDateOfMonth(utilDate.add(utilDate.getFirstDateOfMonth(date), utilDate.MONTH, value)).getDate());
						}
						d.setDate(day);
						d.setMonth(date.getMonth() + value);
						break;
					case utilDate.YEAR:
						day = date.getDate();
						if (day > 28) {
							day = Math.min(day, utilDate.getLastDateOfMonth(utilDate.add(utilDate.getFirstDateOfMonth(date), utilDate.YEAR, value)).getDate());
						}
						d.setDate(day);
						d.setFullYear(date.getFullYear() + value);
						break;
				}
			}

			if (decimalValue) {
				switch (interval.toLowerCase()) {
					case utilDate.MILLI:
						base = 1;
						break;
					case utilDate.SECOND:
						base = 1000;
						break;
					case utilDate.MINUTE:
						base = 1000 * 60;
						break;
					case utilDate.HOUR:
						base = 1000 * 60 * 60;
						break;
					case utilDate.DAY:
						base = 1000 * 60 * 60 * 24;
						break;

					case utilDate.MONTH:
						day = utilDate.getDaysInMonth(d);
						base = 1000 * 60 * 60 * 24 * day;
						break;

					case utilDate.YEAR:
						day = (utilDate.isLeapYear(d) ? 366 : 365);
						base = 1000 * 60 * 60 * 24 * day;
						break;
				}
				if (base) {
					d.setTime(d.getTime() + base * decimalValue);
				}
			}

			return d;
		},

		/**
		 * Provides a convenient method for performing basic date arithmetic. This method
		 * does not modify the Date instance being called - it creates and returns
		 * a new Date instance containing the resulting date value.
		 *
		 * @Examples:
		 *
		 *     // Basic usage:
		 *     var dt = µ.date.subtract(new Date('10/29/2006'), µ.date.DAY, 5);
		 *     console.log(dt); // returns 'Tue Oct 24 2006 00:00:00'
		 *
		 *     // Negative values will be added:
		 *     var dt2 = µ.date.subtract(new Date('10/1/2006'), µ.date.DAY, -5);
		 *     console.log(dt2); // returns 'Fri Oct 6 2006 00:00:00'
		 *
		 *      // Decimal values can be used:
		 *     var dt3 = µ.date.subtract(new Date('10/1/2006'), µ.date.DAY, 1.25);
		 *     console.log(dt3); // returns 'Fri Sep 29 2006 06:00:00'
		 *
		 * @param {Date} date The date to modify
		 * @param {String} interval A valid date interval enum value.
		 * @param {Number} value The amount to subtract from the current date.
		 * @return {Date} The new Date instance.
		 */
		subtract: function(date, interval, value){
			return utilDate.add(date, interval, -value);
		},

		/**
		 * Проверка на вхождение даты между двумя датами
		 *
		 * @param {Date} date The date to check
		 * @param {Date} start Start date
		 * @param {Date} end End date
		 * @return {Boolean} `true` if this date falls on or between the given start and end dates.
		 */
		between : function(date, start, end) {
			var t = date.getTime();
			return start.getTime() <= t && t <= end.getTime();
		},

		/**
		 * Расчитывает сколько ВЕЛИЧИН входит в промежуток между датами
		 *
		 * @Examples:
		 *
		 *     // Basic usage:
		 *     var dt = µ.date.diff(new Date('10/29/2006'), new Date('12/19/2007'), µ.date.DAY);
		 *
		 * @param {Date} min The first time.
		 * @param {Date} max The second time.
		 * @param {String} unit The unit. This unit is compatible with the date interval constants.
		 * @return {Number} The maximum number n of units that min + n * unit <= max.
		 */
		diff: function (min, max, unit) {
			var est, diff = +max - min;
			switch (unit) {
				case utilDate.MILLI:
					return diff;
				case utilDate.SECOND:
					return Math.floor(diff / 1000);
				case utilDate.MINUTE:
					return Math.floor(diff / 60000);
				case utilDate.HOUR:
					return Math.floor(diff / 3600000);
				case utilDate.DAY:
					return Math.floor(diff / 86400000);
				case 'w':
					return Math.floor(diff / 604800000);
				case utilDate.MONTH:
					est = (max.getFullYear() * 12 + max.getMonth()) - (min.getFullYear() * 12 + min.getMonth());
					if (utilDate.add(min, unit, est) > max) {
						return est - 1;
					}
					return est;
				case utilDate.YEAR:
					est = max.getFullYear() - min.getFullYear();
					if (utilDate.add(min, unit, est) > max) {
						return est - 1;
					} else {
						return est;
					}
			}
		},

		/**
		 * Выравнивает дату по ВЕЛИЧИНЕ
		 *
		 * @Examples:
		 *
		 *     // Basic usage:
		 *     var dt = µ.date.align(new Date('10/29/2006'), µ.date.DAY);
		 *
		 *
		 * @param {Date} date The date to be aligned.
		 * @param {String} unit The unit. This unit is compatible with the date interval constants.
		 * @param {Number} step
		 * @return {Date} The aligned date.
		 */
		align: function (date, unit, step) {
			var num = new Date(+date);

			switch (unit.toLowerCase()) {
				case utilDate.MILLI:
					return num;
				case utilDate.SECOND:
					num.setUTCSeconds(num.getUTCSeconds() - num.getUTCSeconds() % step);
					num.setUTCMilliseconds(0);
					return num;
				case utilDate.MINUTE:
					num.setUTCMinutes(num.getUTCMinutes() - num.getUTCMinutes() % step);
					num.setUTCSeconds(0);
					num.setUTCMilliseconds(0);
					return num;
				case utilDate.HOUR:
					num.setUTCHours(num.getUTCHours() - num.getUTCHours() % step);
					num.setUTCMinutes(0);
					num.setUTCSeconds(0);
					num.setUTCMilliseconds(0);
					return num;
				case utilDate.DAY:
					if (step === 7 || step === 14){
						num.setUTCDate(num.getUTCDate() - num.getUTCDay() + 1);
					}
					num.setUTCHours(0);
					num.setUTCMinutes(0);
					num.setUTCSeconds(0);
					num.setUTCMilliseconds(0);
					return num;
				case utilDate.MONTH:
					num.setUTCMonth(num.getUTCMonth() - (num.getUTCMonth() - 1) % step,1);
					num.setUTCHours(0);
					num.setUTCMinutes(0);
					num.setUTCSeconds(0);
					num.setUTCMilliseconds(0);
					return num;
				case utilDate.YEAR:
					num.setUTCFullYear(num.getUTCFullYear() - num.getUTCFullYear() % step, 1, 1);
					num.setUTCHours(0);
					num.setUTCMinutes(0);
					num.setUTCSeconds(0);
					num.setUTCMilliseconds(0);
					return date;
			}
		}
	};
})();
µ.object = µ.object || {};

µ.object = (function () {

	var muObject;

	return muObject = {

		/**
		 * Возвращает количество свойств объекта
		 *
		 * @example
		 * var size = µ.obj.getSize({
		 *         name: 'Jacky',
		 *         loves: 'food'
		 *     }); // size equals 2
		 *
		 * @param {Object} object
		 * @return {Number} size
		 *
		 * @param object
		 * @returns {number}
		 */
		getSize: function (object) {
			var size = 0,
				property;

			for (property in object) {
				if (object.hasOwnProperty(property)) {
					size++;
				}
			}

			return size;
		},

		/**
		 * Проверяет на присутствие свойств в объекте
		 *
		 * @param {Object} object
		 * @return {Boolean} `true` if there no properties on the object.
		 */
		isEmpty: function (object) {
			for (var key in object) {
				if (object.hasOwnProperty(key)) {
					return false;
				}
			}
			return true;
		},

		/**
		 * Возвращает `hasOwnProperty` ключи объекта как массив
		 *
		 *     var values = µ.obj.getKeys({
  	     *         name: 'Jacky',
     	 *         loves: 'food'
     	 *     }); // ['name', 'loves']
		 *
		 * @param {Object} object
		 * @return {String[]} An array of keys from the object
		 * @method
		 */
		getKeys: (typeof Object.keys == 'function')
			? function (object) {
			if (!object) {
				return [];
			}
			return Object.keys(object);
		}
			: function (object) {
			var keys = [],
				property;

			for (property in object) {
				if (object.hasOwnProperty(property)) {
					keys.push(property);
				}
			}

			return keys;
		},

		/**
		 * Возвращает все ключи объекта как массив
		 *
		 * @param {Object} object
		 * @return {String[]} An array of keys from the object or any of its prototypes.
		 * @method
		 */
		getAllKeys: function (object) {
			var keys = [],
				property;

			for (property in object) {
				keys.push(property);
			}

			return keys;
		},

		/**
		 * Возвращает ключ по первому совпавшему значению
		 *
		 * If no matching value is found, null is returned.
		 *
		 *     var person = {
     	 *         name: 'Jacky',
     	 *         loves: 'food'
     	 *     };
		 *
		 *     alert(µ.obj.getKey(person, 'food')); // alerts 'loves'
		 *
		 * @param {Object} object
		 * @param {Object} value The value to find
		 */
		getKey: function (object, value) {
			for (var property in object) {
				if (object.hasOwnProperty(property) && object[property] === value) {
					return property;
				}
			}

			return null;
		},

		/**
		 * Объединение объектов рекурсивно
		 *
		 *     var extjs = {
		 *         companyName: 'Ext JS',
		 *         products: ['Ext JS', 'Ext GWT', 'Ext Designer'],
		 *         isSuperCool: true,
		 *         office: {
		 *             size: 2000,
		 *             location: 'Palo Alto',
		 *             isFun: true
		 *         }
		 *     };
		 *
		 *     var newStuff = {
		 *         companyName: 'Sencha Inc.',
		 *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
		 *         office: {
		 *             size: 40000,
		 *             location: 'Redwood City'
		 *         }
		 *     };
		 *
		 *     var sencha = µ.obj.merge(extjs, newStuff);
		 *
		 *     // extjs and sencha then equals to
		 *     {
		 *         companyName: 'Sencha Inc.',
		 *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
		 *         isSuperCool: true,
		 *         office: {
		 *             size: 40000,
		 *             location: 'Redwood City',
		 *             isFun: true
		 *         }
		 *     }
		 *
		 * @param {Object} destination The object into which all subsequent objects are merged.
		 * @param {Object...} object Any number of objects to merge into the destination.
		 * @return {Object} merged The destination object with all passed objects merged in.
		 */
		merge: function (destination) {
			var i = 1,
				ln = arguments.length,
				mergeFn = muObject.merge,
				cloneFn = µ.clone,
				object, key, value, sourceKey;

			for (; i < ln; i++) {
				object = arguments[i];

				for (key in object) {
					value = object[key];
					if (value && value.constructor === Object) {
						sourceKey = destination[key];
						if (sourceKey && sourceKey.constructor === Object) {
							mergeFn(sourceKey, value);
						} else {
							destination[key] = cloneFn(value);
						}
					} else {
						destination[key] = value;
					}
				}
			}

			return destination;
		},

		/**
		 * Конвертирует пары `name` - `value` в массив объектов с поддержкой вложенных структур.
		 *
		 * @example:
		 *
		 *     var objects = µ.obj.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
		 *
		 *     // objects then equals:
		 *     [
		 *         { name: 'hobbies', value: 'reading' },
		 *         { name: 'hobbies', value: 'cooking' },
		 *         { name: 'hobbies', value: 'swimming' },
		 *     ];
		 *
		 *     var objects = µ.obj.toQueryObjects('dateOfBirth', {
		 *         day: 3,
		 *         month: 8,
		 *         year: 1987,
		 *         extra: {
		 *             hour: 4
		 *             minute: 30
		 *         }
		 *     }, true); // Recursive
		 *
		 *     // objects then equals:
		 *     [
		 *         { name: 'dateOfBirth[day]', value: 3 },
		 *         { name: 'dateOfBirth[month]', value: 8 },
		 *         { name: 'dateOfBirth[year]', value: 1987 },
		 *         { name: 'dateOfBirth[extra][hour]', value: 4 },
		 *         { name: 'dateOfBirth[extra][minute]', value: 30 },
		 *     ];
		 *
		 * @param {String} name
		 * @param {Object/Array} value
		 * @param {Boolean} [recursive=false] True to traverse object recursively
		 * @return {Object[]}
		 */
		toQueryObjects: function (name, value, recursive) {
			var self = muObject.toQueryObjects,
				objects = [],
				i, ln;

			if (µ.isArray(value)) {
				for (i = 0, ln = value.length; i < ln; i++) {
					if (recursive) {
						objects = objects.concat(self(name + '[' + i + ']', value[i], true));
					}
					else {
						objects.push({
							name: name,
							value: value[i]
						});
					}
				}
			}
			else if (µ.isObject(value)) {
				for (i in value) {
					if (value.hasOwnProperty(i)) {
						if (recursive) {
							objects = objects.concat(self(name + '[' + i + ']', value[i], true));
						}
						else {
							objects.push({
								name: name,
								value: value[i]
							});
						}
					}
				}
			}
			else {
				objects.push({
					name: name,
					value: value
				});
			}

			return objects;
		},

		/**
		 * Берет объект и конвертирует его в строку запроса
		 *
		 * Non-recursive:
		 *
		 *     µ.obj.toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
		 *     µ.obj.toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
		 *     µ.obj.toQueryString({'some price': '$300'}); // returns "some%20price=%24300"
		 *     µ.obj.toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
		 *     µ.obj.toQueryString({colors: ['red', 'green', 'blue']}); // returns "colors=red&colors=green&colors=blue"
		 *
		 * Recursive:
		 *
		 *     µ.obj.toQueryString({
     *         username: 'Jacky',
     *         dateOfBirth: {
     *             day: 1,
     *             month: 2,
     *             year: 1911
     *         },
     *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
     *     }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):
		 *     // username=Jacky
		 *     //    &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
		 *     //    &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
		 *
		 * @param {Object} object The object to encode
		 * @param {Boolean} [recursive=false] Whether or not to interpret the object in recursive format.
		 * (PHP / Ruby on Rails servers and similar).
		 * @return {String} queryString
		 */
		toQueryString: function (object, recursive) {
			var paramObjects = [],
				params = [],
				i, j, ln, paramObject, value;

			for (i in object) {
				if (object.hasOwnProperty(i)) {
					paramObjects = paramObjects.concat(muObject.toQueryObjects(i, object[i], recursive));
				}
			}

			for (j = 0, ln = paramObjects.length; j < ln; j++) {
				paramObject = paramObjects[j];
				value = paramObject.value;

				if (µ.isEmpty(value)) {
					value = '';
				} else if (µ.isDate(value)) {
					value = µ.date.toString(value);
				}

				params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
			}

			return params.join('&');
		},

		/**
		 * Конвертирует строку запроса в объект
		 *
		 * Non-recursive:
		 *
		 *     µ.obj.fromQueryString("foo=1&bar=2"); // returns {foo: '1', bar: '2'}
		 *     µ.obj.fromQueryString("foo=&bar=2"); // returns {foo: '', bar: '2'}
		 *     µ.obj.fromQueryString("some%20price=%24300"); // returns {'some price': '$300'}
		 *     µ.obj.fromQueryString("colors=red&colors=green&colors=blue"); // returns {colors: ['red', 'green', 'blue']}
		 *
		 * Recursive:
		 *
		 *     µ.obj.fromQueryString(
		 *         "username=Jacky&"+
		 *         "dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&"+
		 *         "hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&"+
		 *         "hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
		 *
		 *     // returns
		 *     {
		 *         username: 'Jacky',
		 *         dateOfBirth: {
		 *             day: '1',
		 *             month: '2',
		 *             year: '1911'
		 *         },
		 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
		 *     }
		 *
		 * @param {String} queryString The query string to decode
		 * @param {Boolean} [recursive=false] Whether or not to recursively decode the string. This format is supported by
		 * PHP / Ruby on Rails servers and similar.
		 * @return {Object}
		 */
		fromQueryString: function (queryString, recursive) {
			var parts = queryString.replace(queryRe, '').split('&'),
				object = {},
				temp, components, name, value, i, ln,
				part, j, subLn, matchedKeys, matchedName,
				keys, key, nextKey;

			for (i = 0, ln = parts.length; i < ln; i++) {
				part = parts[i];

				if (part.length > 0) {
					components = part.split('=');
					name = components[0];
					name = name.replace(plusRe, '%20');
					name = decodeURIComponent(name);

					value = components[1];
					if (value !== undefined) {
						value = value.replace(plusRe, '%20');
						value = decodeURIComponent(value);
					} else {
						value = '';
					}

					if (!recursive) {
						if (object.hasOwnProperty(name)) {
							if (!µ.isArray(object[name])) {
								object[name] = [object[name]];
							}

							object[name].push(value);
						}
						else {
							object[name] = value;
						}
					}
					else {
						matchedKeys = name.match(keyRe);
						matchedName = name.match(nameRe);

						//<debug>
						if (!matchedName) {
							throw new Error('[µ.obj.fromQueryString] Malformed query string given, failed parsing name from "' + part + '"');
						}
						//</debug>

						name = matchedName[0];
						keys = [];

						if (matchedKeys === null) {
							object[name] = value;
							continue;
						}

						for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
							key = matchedKeys[j];
							key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
							keys.push(key);
						}

						keys.unshift(name);

						temp = object;

						for (j = 0, subLn = keys.length; j < subLn; j++) {
							key = keys[j];

							if (j === subLn - 1) {
								if (µ.isArray(temp) && key === '') {
									temp.push(value);
								}
								else {
									temp[key] = value;
								}
							}
							else {
								if (temp[key] === undefined || typeof temp[key] === 'string') {
									nextKey = keys[j + 1];

									temp[key] = (µ.isNumeric(nextKey) || nextKey === '') ? [] : {};
								}

								temp = temp[key];
							}
						}
					}
				}
			}

			return object;
		}
	};
})();
if (µ.DEBUG) console.log('µ loaded');
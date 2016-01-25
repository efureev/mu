µ.utils = µ.utils || {};

µ.utils = (function () {

	var
		reTrim = /^\s+|\s+$/g,

		INFINITY = 1 / 0,

		m = {
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
				string = this.toString(string);

				if (!string) {
					return string;
				}
				return string.replace(reTrim, '');
			},

			/**
			 * Getting an absolute URL
			 * @Example:
			 * 	getAbsoluteUrl('/something');
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
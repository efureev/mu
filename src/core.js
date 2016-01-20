var core = {
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
	}

};

µ.apply(µ, core);
µ.array = µ.array || {};

µ.array = (function () {

	var erase = function (array, index, removeCount) {
			array.splice(index, removeCount);
			return array;
		},

		m = {

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

					if (this.index(clone, item) === -1) {
						clone.push(item);
					}
				}

				return clone;
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
			}

		};

	return m;
})();
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
                i     = 0,
                ln    = array.length,
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
         * @param {Array}, {Array2}, ...
         * @return {Array} merged
         */
        merge: function () {
            var args  = Array.prototype.slice.call(arguments),
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
                i       = 0,
                ln      = array.length,
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
         * Возвращает последний элемент массива
         *
         * @param array
         */
        last: function (array) {
            return array.pop();
        },

        /**
         * Возвращает первый элемент массива
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

            return this.removeIdx(array, index);
        },

        /**
         * Удаляет элемент массива по индексу элемента
         * @param array
         * @param index
         * @returns {*}
         */
        removeIdx: function (array, index) {
            if (null !== index && index !== -1 && index !== undefined) {
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
        equals: function (array1, array2) {
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
        },

        /**
         * Возвращает наибольшее число из массива
         *
         * @param {array} a
         * @returns {number}
         */
        max: function (a) {
            return Math.max.apply(null, a);
        },

        /**
         * Возвращает наименьшее число из массива
         *
         * @param {array} a
         * @returns {number}
         */
        min: function (a) {
            return Math.min.apply(null, a);
        },

        /**
         * Создаёт новый экземпляр Array из массивоподобного или итерируемого объекта.
         *
         * @returns {from}
         */
        from: (function () {
            var toStr = Object.prototype.toString;
            var isCallable = function (fn) {
                return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
            };

            var toInteger = function (value) {
                var number = Number(value);
                if (isNaN(number)) {
                    return 0;
                }
                if (number === 0 || !isFinite(number)) {
                    return number;
                }
                return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
            };

            var maxSafeInteger = Math.pow(2, 53) - 1;
            var toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };

            return function from(arrayLike/*, mapFn, thisArg */) {
                var C = this;
                var items = Object(arrayLike);

                if (arrayLike == null) {
                    throw new TypeError('Array.from requires an array-like object - not null or undefined');
                }

                var mapFn = arguments[1];
                if (typeof mapFn !== 'undefined') {
                    mapFn = arguments.length > 1 ? arguments[1] : void undefined;
                    // 5. иначе
                    // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
                    if (!isCallable(mapFn)) {
                        throw new TypeError('Array.from: when provided, the second argument must be a function');
                    }

                    // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }

                var len = toLength(items.length);
                var A = isCallable(C) ? Object(new C(len)) : new Array(len);
                var k = 0;
                var kValue;

                while (k < len) {
                    kValue = items[k];
                    if (mapFn) {
                        A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    } else {
                        A[k] = kValue;
                    }
                    k += 1;
                }

                A.length = len;

                return A;
            };
        }())

    };
})();
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
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
            'Январь'  : 0,
            'Янв'     : 0,
            'Февраль' : 1,
            'Фев'     : 1,
            'Март'    : 2,
            'Мар'     : 2,
            'Апрель'  : 3,
            'Апр'     : 3,
            'Май'     : 4,
            'Июнь'    : 5,
            'Июн'     : 5,
            'Июль'    : 6,
            'Июл'     : 6,
            'Август'  : 7,
            'Авг'     : 7,
            'Сентябрь': 8,
            'Сент'    : 8,
            'Октябрь' : 9,
            'Окт'     : 9,
            'Ноябрь'  : 10,
            'Ноя'     : 10,
            'Декабрь' : 11,
            'Дек'     : 11
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
                d   = utilDate.clone(date),
                m   = date.getMonth(),
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
                for (hr = 1, c = utilDate.add(date, utilDate.HOUR, hr); c.getDate() !== d; hr++, c = utilDate.add(date, utilDate.HOUR, hr)) ;

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
            var d                       = utilDate.clone(date),
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
        subtract: function (date, interval, value) {
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
        between: function (date, start, end) {
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
                    if (step === 7 || step === 14) {
                        num.setUTCDate(num.getUTCDate() - num.getUTCDay() + 1);
                    }
                    num.setUTCHours(0);
                    num.setUTCMinutes(0);
                    num.setUTCSeconds(0);
                    num.setUTCMilliseconds(0);
                    return num;
                case utilDate.MONTH:
                    num.setUTCMonth(num.getUTCMonth() - (num.getUTCMonth() - 1) % step, 1);
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
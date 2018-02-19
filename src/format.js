µ.format = µ.format || {};

µ.format = (function () {
    var currencySign      = 'р.',
        currencyPrecision = 2,
        currencyAtEnd     = true,
        thousandSeparator = ' ',
        decimalSeparator  = '.',
        formatCleanRe     = /[^\d\.]/g;

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
                format       = ",0",
                i            = 0;
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
         * format number by adding thousands separaters and significant digits while rounding
         */
        num: function (number, decimals, decPoint, thousandsSep) {
            decimals = isNaN(decimals) ? 2 : Math.abs(decimals);
            decPoint = (decPoint === undefined) ? '.' : decPoint;
            thousandsSep = (thousandsSep === undefined) ? ',' : thousandsSep;

            var sign = number < 0 ? '-' : '';
            number = Math.abs(+number || 0);

            var intPart = parseInt(number.toFixed(decimals), 10) + '';
            var j = intPart.length > 3 ? intPart.length % 3 : 0;

            return sign + (j ? intPart.substr(0, j) + thousandsSep : '') + intPart.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep) + (decimals ? decPoint + Math.abs(number - intPart).toFixed(decimals).slice(2) : '');
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
µ.humanize = µ.humanize || {};

µ.humanize = (function () {

    var muHumanize;

    return muHumanize = {
        /**
         * Formats the value like a 'human-readable' number (i.e. '13 K', '4.1 M', '102', etc).
         *
         * For example:
         * If value is 123456789, the output would be 117.7 M.
         */
        intWord: function (number, units, kilo, decimals, decPoint, thousandsSep, suffixSep) {
            var humanized, unit;

            units = units || ['', 'K', 'M', 'B', 'T'],
                unit = units.length - 1,
                kilo = kilo || 1000,
                decimals = isNaN(decimals) ? 2 : Math.abs(decimals),
                decPoint = decPoint || '.',
                thousandsSep = thousandsSep || ',',
                suffixSep = suffixSep || '';

            for (var i = 0; i < units.length; i++) {
                if (number < Math.pow(kilo, i + 1)) {
                    unit = i;
                    break;
                }
            }
            humanized = number / Math.pow(kilo, unit);

            var suffix = units[unit] ? suffixSep + units[unit] : '';
            return µ.format.num(humanized, decimals, decPoint, thousandsSep) + suffix;
        },

        /**
         * Formats the value like a 'human-readable' file size (i.e. '13 KB', '4.1 MB', '102 bytes', etc).
         *
         * For example:
         * If value is 123456789, the output would be 117.7 MB.
         */
        fileSize: function (filesize, kilo, decimals, decPoint, thousandsSep, suffixSep) {
            kilo = (kilo === undefined) ? 1024 : kilo;
            if (filesize <= 0) {
                return '0 bytes';
            }
            if (filesize < kilo && decimals === undefined) {
                decimals = 0;
            }
            if (suffixSep === undefined) {
                suffixSep = ' ';
            }
            return muHumanize.intWord(filesize, ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb'], kilo, decimals, decPoint, thousandsSep, suffixSep);
        }
    };
})();
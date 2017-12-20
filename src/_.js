var µ = µ || {};

(function () {
    var global = typeof self == 'object' && self.self === self && self ||
        typeof global === 'object' && global.global === global && global ||
        this;

    µ.global = global;

    µ.DEBUG = false;
    µ.VERSION = '0.1.0';

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
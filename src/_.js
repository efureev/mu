var µ = µ || {};

(function() {
	var global = typeof self == 'object' && self.self === self && self ||
		typeof global == 'object' && global.global === global && global ||
		this;

	µ.global = global;

	µ.DEBUG = true;
	µ.VERSION = '0.0.1';

	µ.apply = function(object, config, defaults) {
		if (defaults) {
			µ.apply(object, defaults);
		}

		if (object && config && typeof config === 'object') {
			var i;
			for (i in config) {
				object[i] = config[i];
			}
		}

		return object;
	};

	if (typeof exports != 'undefined' && !exports.nodeType) {
		if (typeof module != 'undefined' && !module.nodeType && module.exports) {
			exports = module.exports = µ;
		}
		exports.µ = µ;
	} else {
		global.µ = µ;
	}
})();
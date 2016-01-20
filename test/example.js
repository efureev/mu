var test = require('unit.js'),
	µ = require('../dest/mu.min.js');

var clone = function (obj) {
	return JSON.parse(JSON.stringify(obj));
};

var
	variables = {
		_null: null,
		_void: void 0,
		_undefined: undefined,
		_number: 7,
		_zero: 0,
		_NaN: NaN,
		_true: true,
		_false: false,
		_emptyObject: {},
		_emptyArray: [],
		_object: {key: 'Value'},
		_array: [1, 2, 3],
		_string: 'string',
		_emptyString: '',
		_fn: function () {
		}
	};

describe('testing CORE', function () {
	it('isUndefined', function () {
		var a = clone(variables);
		delete(a._undefined);

		for (var item in a) {
			test.value(µ.isUndefined(variables[item])).isFalse();
		}
		test.value(µ.isUndefined(variables._undefined)).isTrue();
	});

	it('isDefined', function () {
		var a = clone(variables);
		delete(a._undefined);

		for (var item in a) {
			test.value(µ.isDefined(variables[item])).isTrue();
		}
		test.value(µ.isDefined(variables._undefined)).isFalse();
	});

	it('isNull', function () {
		var a = clone(variables);
		delete(a._null);

		for (var item in a) {
			test.value(µ.isNull(variables[item])).isFalse();
		}
		test.value(µ.isNull(variables._null)).isTrue();
	});

	it('isObject', function () {
		var a = clone(variables);
		delete(a._object);
		delete(a._emptyObject);

		test.value(µ.isObject(variables._object)).isTrue();
		test.value(µ.isObject(variables._emptyObject)).isTrue();

		for (var item in a) {
			test.value(µ.isObject(variables[item])).isFalse();
		}

	});

	it('isEmptyObject', function () {
		var a = clone(variables);
		delete(a._emptyObject);

		test.value(µ.isEmptyObject(variables._emptyObject)).isTrue();

		for (var item in a) {
			test.value(µ.isEmptyObject(variables[item])).isFalse();
		}

	});

	it('isBoolean', function () {
		var a = clone(variables);
		delete(a._true);
		delete(a._false);

		test.value(µ.isBoolean(variables._true)).isTrue();
		test.value(µ.isBoolean(variables._false)).isTrue();

		for (var item in a) {
			test.value(µ.isBoolean(variables[item])).isFalse();
		}
	});

	it('isNumber', function () {
		var a = clone(variables);
		delete(a._number);
		delete(a._zero);

		test.value(µ.isNumber(variables._number)).isTrue();
		test.value(µ.isNumber(variables._zero)).isTrue();

		for (var item in a) {
			test.value(µ.isNumber(variables[item])).isFalse();
		}
	});

	it('isFunction', function () {
		var a = clone(variables);
		delete(a._fn);

		test.value(µ.isFunction(variables._fn)).isTrue();

		for (var item in a) {
			test.value(µ.isFunction(variables[item])).isFalse();
		}
	});

	it('isArray', function () {
		var a = clone(variables);
		delete(a._array);
		delete(a._emptyArray);

		test.value(µ.isArray(variables._array)).isTrue();
		test.value(µ.isArray(variables._emptyArray)).isTrue();

		for (var item in a) {
			test.value(µ.isArray(variables[item])).isFalse();
		}
	});

	it('isEmpty', function () {
		var a = clone(variables);
		delete(a._emptyArray);
		delete(a._emptyObject);
		delete(a._null);
		delete(a._void);
		delete(a._emptyString);

		test.value(µ.isEmpty(variables._emptyArray)).isTrue();
		test.value(µ.isEmpty(variables._emptyObject)).isTrue();
		test.value(µ.isEmpty(variables._null)).isTrue();
		test.value(µ.isEmpty(variables._void)).isTrue();
		test.value(µ.isEmpty(variables._emptyString)).isTrue();

		for (var item in a) {
			test.value(µ.isEmpty(variables[item])).isFalse();
		}
	});

	it('has', function () {
		test.value(µ.has(variables._object, 'key')).isTrue();
		test.value(µ.has(variables._object, 'val')).isFalse();
	});

	it('noop', function () {
		test.value(µ.noop).isFunction();
	});

	it('now', function () {
		var d = new Date().getTime(),
			d2 = µ.now();
		test
			.number(d2).isNotNaN()
			.bool(d2 >= d).isTrue();
	});

});


describe('testing ARRAY', function () {

	it('index', function () {
		var a = µ.array.index([1, 2, 4, 6], 2),
			b = µ.array.index([1, 2, 4, 6], 1);
		test
			.number(a).isIdenticalTo(1)
			.number(b).isIdenticalTo(0);
	});

	it('unique', function () {
		var a = µ.array.unique([1, 2, 4, 6, 2, 2, 2, 2, 0, 12, 2, 1]);

		test
			.array(a).is([1, 2, 4, 6, 0, 12]);
	});

	it('explode', function () {
		test
			.array(µ.array.explode(',', 'one,two,three')).is(['one', 'two', 'three']);

		test
			.array(µ.array.explode(',', 'one,two,three', 2)).is(['one', 'two,three']);
	});

	it('clean', function () {
		test
			.array(µ.array.clean([1, 2, 3, '', null, 2])).is([1, 2, 3, 2]);

	});

	it('last', function () {
		test
			.value(µ.array.last([1, 2, 3, '', null, 6])).is(6);
	});

	it('first', function () {
		test
			.value(µ.array.first([1, 2, 3, '', null, 6])).is(1);
	});

	it('remove', function () {
		test
			.array(µ.array.remove([1, 2, 3, '', null, 6], 3)).is([1, 2, '', null, 6]);
	});


});


describe('testing UTILS', function () {

	it('toString', function () {
		test
			.string(µ.utils.toString(null)).isIdenticalTo('')
			.string(µ.utils.toString({})).isIdenticalTo('')
			.string(µ.utils.toString([])).isIdenticalTo('')
			.string(µ.utils.toString(124)).isIdenticalTo('124')
			.string(µ.utils.toString(0)).isIdenticalTo('0')
			.string(µ.utils.toString([1, 2, 3])).isIdenticalTo('1,2,3');
	});

	it('trim', function () {
		test
			.string(µ.utils.trim('  abc  ')).isIdenticalTo('abc');
	});

});

describe('testing FORMAT', function () {

	it('round', function () {
		test
			.number(µ.format.round(123.21)).isIdenticalTo(123)
			.number(µ.format.round(123.71)).isIdenticalTo(124);
	});

	it('from', function () {
		test
			.number(µ.format.from(123.21, 12)).isIdenticalTo(123.21)
			.number(µ.format.from('123.71', 12)).isIdenticalTo(123.71)
			.number(µ.format.from('sda', 12)).isIdenticalTo(12)
			.number(µ.format.from(NaN, 12)).isIdenticalTo(12)
			.number(µ.format.from({}, 12)).isIdenticalTo(12)
			.number(µ.format.from([], 12)).isIdenticalTo(12)
			.number(µ.format.from('', 12)).isIdenticalTo(12);
	});

	it('number', function () {
		var n = 1234567.22;

		test
			.string(µ.format.number(n, '0.00')).isIdenticalTo('1234567.22')
			.string(µ.format.number(n, '0,000.00')).isIdenticalTo('1 234 567.22')
			.string(µ.format.number(n, '0,000.000')).isIdenticalTo('1 234 567.220')
			.string(µ.format.number(n, '0,000.00', ' руб')).isIdenticalTo('1 234 567.22 руб');
	});


	it('currency', function () {
		var n = 1234567.22;

		test
		 .string(µ.format.currency(n)).isIdenticalTo('1 234 567.22 р.')
		 .string(µ.format.currency(n, 'руб.')).isIdenticalTo('1 234 567.22 руб.')
		 .string(µ.format.currency(n, 'руб.', 2)).isIdenticalTo('1 234 567.22 руб.')
		 .string(µ.format.currency(n, 'руб:', 2, true)).isIdenticalTo('руб: 1 234 567.22')
		 .string(µ.format.currency(-n, 'руб:', 2, true)).isIdenticalTo('руб: -1 234 567.22')
		 .string(µ.format.currency(-n, 'руб.', 2, false)).isIdenticalTo('-1 234 567.22 руб.');
	});


});
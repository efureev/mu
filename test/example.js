var test = require('unit.js'),
    µ    = require('../dist/mu.min.js');

var clone = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};

var
    variables = {
        _null       : null,
        _void       : void 0,
        _undefined  : undefined,
        _number     : 7,
        _zero       : 0,
        _NaN        : NaN,
        _true       : true,
        _false      : false,
        _emptyObject: {},
        _emptyArray : [],
        _object     : {key: 'Value'},
        _deepObject : {
            o     : null,
            u     : undefined,
            child : {key: 'Value', identify: {name: 'Child'}},
            parent: {middle: 'John'}
        },
        _array      : [1, 2, 3],
        _string     : 'string',
        _emptyString: '',
        _fn         : function () {
        }
    };

describe('testing CORE', function () {

    it('apply', function () {
        var a   = clone(variables._object),
            obj = {key2: 'value', key3: 'value3'};

        µ.apply(a, obj);

        test
            .object(a)
            .hasLength(3)
            .hasProperty('key2', 'value')
            .hasProperty('key3', 'value3')
            .hasProperty('key', 'Value')
        ;

        µ.apply(a, obj, {val: 'key'});

        test
            .object(a)
            .hasProperty('val', 'key')
            .hasProperty('key3', 'value3')
            .hasProperty('key', 'Value')
        ;
    });


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
        delete(a._deepObject);

        test.value(µ.isObject(variables._object)).isTrue();
        test.value(µ.isObject(variables._emptyObject)).isTrue();
        test.value(µ.isObject(variables._deepObject)).isTrue();

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


    it('isNative', function () {
        //test.value(µ.isNative(context)).isTrue();
        test.value(µ.isNative(setTimeout)).isFalse();
    });

    it('has', function () {
        test.value(µ.has(variables._object, 'key')).isTrue();
        test.value(µ.has(variables._object, 'val')).isFalse();
    });

    it('noop', function () {
        test.value(µ.noop).isFunction();
    });

    it('now', function () {
        var d  = new Date().getTime(),
            d2 = µ.now();
        test
            .number(d2).isNotNaN()
            .bool(d2 >= d).isTrue();
    });


    it('clone', function () {
        test.value(µ.clone).isFunction();
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

    it('merge', function () {
        var a = µ.array.merge([1, 2, 4], [1, 6, 0], [0, 1, 10]);

        test
            .array(a).is([1, 2, 4, 6, 0, 10]);
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
        test.array(µ.array.remove([1, 2, 3, '', null, 6], 3)).is([1, 2, '', null, 6]);
        test.array(µ.array.remove([1, 2, 3, '', null, 6], null)).is([1, 2, 3, '', 6]);
        test.array(µ.array.remove([1, 2, 3, '', null, 6], undefined)).is([1, 2, 3, '', null, 6]);
    });

    it('removeIdx', function () {
        test.array(µ.array.removeIdx([1, 2, 3, '', null, 6], 1)).is([1, 3, '', null, 6]);
        test.array(µ.array.removeIdx([1, 2, 3, '', null, 6], 3)).is([1, 2, 3, null, 6]);
        test.array(µ.array.removeIdx([1, 2, 3, '', null, 6], 0)).is([2, 3, '', null, 6]);
        test.array(µ.array.removeIdx([1, 2, 3, '', null, 6], null)).is([1, 2, 3, '', null, 6]);
        test.array(µ.array.removeIdx([1, 2, 3, '', null, 6])).is([1, 2, 3, '', null, 6]);
    });

    it('max', function () {
        test.value(µ.array.max([1, 2, 3])).is(3);
        test.value(µ.array.max([1, 10, 101, 2, 3])).is(101);
        test.value(µ.array.max([1, 10, -101, 2, 3])).is(10);
    });

    it('min', function () {
        test.value(µ.array.min([1, 2, 3])).is(1);
        test.value(µ.array.min([1, 10, 101, 2, 3])).is(1);
        test.value(µ.array.min([1, 10, -101, 2, 3])).is(-101);
    });

    it('from', function () {
        test.value(µ.array.from('foo')).is(['f', 'o', 'o']);

        var f = function () {
            return µ.array.from(arguments);
        };

        test.array(f(1, 2, 3)).is([1, 2, 3]);
    });


});


describe('testing OBJECTS', function () {

    it('select', function () {

        test
            .value(µ.object.select(variables._deepObject, 'child.identify.name')).isIdenticalTo('Child')
            .value(µ.object.select(variables._deepObject, 'parent.middle')).isIdenticalTo('John');
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

    it('isEven', function () {
        test.value(µ.utils.isEven(1)).isFalse();
        test.value(µ.utils.isEven(31)).isFalse();
        test.value(µ.utils.isEven(30)).isTrue();
        test.value(µ.utils.isEven(2)).isTrue();
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


describe('testing STRING', function () {

    it('fromCamelCase', function () {
        test
            .string(µ.str.fromCamelCase('someDatabaseFieldName', ' ')).isIdenticalTo('some database field name')
            .string(µ.str.fromCamelCase('someLabelThatNeedsToBeCamelized', '-')).isIdenticalTo('some-label-that-needs-to-be-camelized')
            .string(µ.str.fromCamelCase('someJavascriptProperty')).isIdenticalTo('some_javascript_property');
    });

    it('toCamelCase', function () {
        test
            .string(µ.str.toCamelCase('some_database_field_name')).isIdenticalTo('someDatabaseFieldName')
            .string(µ.str.toCamelCase('Some label that needs to be camelized')).isIdenticalTo('someLabelThatNeedsToBeCamelized')
            .string(µ.str.toCamelCase('some-javascript-property')).isIdenticalTo('someJavascriptProperty')
            .string(µ.str.toCamelCase('some-mixed_string with spaces_underscores-and-hyphens')).isIdenticalTo('someMixedStringWithSpacesUnderscoresAndHyphens');
    });

    it('truncateString', function () {
        test
            .string(µ.str.truncate('some database field name', 5)).isIdenticalTo('so...')
            .string(µ.str.truncate('some_database_field_name', 12, '..')).isIdenticalTo('some_datab..');
    });


});


describe('testing EVENTS', function () {

    it('once', function () {
        var result = µ.event.once(function () {
            //console.log('Run!');
        });

        result();
        result();
        result();
    });

});


describe('testing HUMANIZE', function () {

    it('fileSize', function () {
        test
            .string(µ.humanize.fileSize(3123123)).isIdenticalTo('2.98 Mb')
            .string(µ.humanize.fileSize(123)).isIdenticalTo('123 bytes')
            .string(µ.humanize.fileSize(21323)).isIdenticalTo('20.82 Kb')
            .string(µ.humanize.fileSize(7900221323)).isIdenticalTo('7.36 Gb')
    });


    it('intWord', function () {
        test
            .string(µ.humanize.intWord(3123123)).isIdenticalTo('3.12M')
            .string(µ.humanize.intWord(123)).isIdenticalTo('123.00')
            .string(µ.humanize.intWord(21323)).isIdenticalTo('21.32K')
            .string(µ.humanize.intWord(7900221323)).isIdenticalTo('7.90B')
    });


});
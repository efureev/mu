µ.object = µ.object || {};

µ.object = (function () {

    var muObject;

    return muObject = {

        /**
         * Возвращает количество свойств объекта
         *
         * @example
         * var size = µ.obj.getSize({
		 *         name: 'Jacky',
		 *         loves: 'food'
		 *     }); // size equals 2
         *
         * @param {Object} object
         * @return {Number} size
         *
         * @param object
         * @returns {number}
         */
        getSize: function (object) {
            var size = 0,
                property;

            for (property in object) {
                if (object.hasOwnProperty(property)) {
                    size++;
                }
            }

            return size;
        },

        /**
         * Проверяет на присутствие свойств в объекте
         *
         * @param {Object} object
         * @return {Boolean} `true` if there no properties on the object.
         */
        isEmpty: function (object) {
            for (var key in object) {
                if (object.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        },

        /**
         * Возвращает `hasOwnProperty` ключи объекта как массив
         *
         *     var values = µ.obj.getKeys({
  	     *         name: 'Jacky',
     	 *         loves: 'food'
     	 *     }); // ['name', 'loves']
         *
         * @param {Object} object
         * @return {String[]} An array of keys from the object
         * @method
         */
        getKeys: (typeof Object.keys == 'function')
            ? function (object) {
                if (!object) {
                    return [];
                }
                return Object.keys(object);
            }
            : function (object) {
                var keys = [],
                    property;

                for (property in object) {
                    if (object.hasOwnProperty(property)) {
                        keys.push(property);
                    }
                }

                return keys;
            },

        /**
         * Возвращает все ключи объекта как массив
         *
         * @param {Object} object
         * @return {String[]} An array of keys from the object or any of its prototypes.
         * @method
         */
        getAllKeys: function (object) {
            var keys = [],
                property;

            for (property in object) {
                keys.push(property);
            }

            return keys;
        },

        /**
         * Возвращает ключ по первому совпавшему значению
         *
         * If no matching value is found, null is returned.
         *
         *     var person = {
     	 *         name: 'Jacky',
     	 *         loves: 'food'
     	 *     };
         *
         *     alert(µ.obj.getKey(person, 'food')); // alerts 'loves'
         *
         * @param {Object} object
         * @param {Object} value The value to find
         */
        getKey: function (object, value) {
            for (var property in object) {
                if (object.hasOwnProperty(property) && object[property] === value) {
                    return property;
                }
            }

            return null;
        },

        /**
         * Объединение объектов рекурсивно
         *
         *     var extjs = {
		 *         companyName: 'Ext JS',
		 *         products: ['Ext JS', 'Ext GWT', 'Ext Designer'],
		 *         isSuperCool: true,
		 *         office: {
		 *             size: 2000,
		 *             location: 'Palo Alto',
		 *             isFun: true
		 *         }
		 *     };
         *
         *     var newStuff = {
		 *         companyName: 'Sencha Inc.',
		 *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
		 *         office: {
		 *             size: 40000,
		 *             location: 'Redwood City'
		 *         }
		 *     };
         *
         *     var sencha = µ.obj.merge(extjs, newStuff);
         *
         *     // extjs and sencha then equals to
         *     {
		 *         companyName: 'Sencha Inc.',
		 *         products: ['Ext JS', 'Ext GWT', 'Ext Designer', 'Sencha Touch', 'Sencha Animator'],
		 *         isSuperCool: true,
		 *         office: {
		 *             size: 40000,
		 *             location: 'Redwood City',
		 *             isFun: true
		 *         }
		 *     }
         *
         * @param {Object} destination The object into which all subsequent objects are merged.
         * @param {Object...} object Any number of objects to merge into the destination.
         * @return {Object} merged The destination object with all passed objects merged in.
         */
        merge: function (destination) {
            var i       = 1,
                ln      = arguments.length,
                mergeFn = muObject.merge,
                cloneFn = µ.clone,
                object, key, value, sourceKey;

            for (; i < ln; i++) {
                object = arguments[i];

                for (key in object) {
                    value = object[key];
                    if (value && value.constructor === Object) {
                        sourceKey = destination[key];
                        if (sourceKey && sourceKey.constructor === Object) {
                            mergeFn(sourceKey, value);
                        } else {
                            destination[key] = cloneFn(value);
                        }
                    } else {
                        destination[key] = value;
                    }
                }
            }

            return destination;
        },

        /**
         * Конвертирует пары `name` - `value` в массив объектов с поддержкой вложенных структур.
         *
         * @example:
         *
         *     var objects = µ.obj.toQueryObjects('hobbies', ['reading', 'cooking', 'swimming']);
         *
         *     // objects then equals:
         *     [
         *         { name: 'hobbies', value: 'reading' },
         *         { name: 'hobbies', value: 'cooking' },
         *         { name: 'hobbies', value: 'swimming' },
         *     ];
         *
         *     var objects = µ.obj.toQueryObjects('dateOfBirth', {
		 *         day: 3,
		 *         month: 8,
		 *         year: 1987,
		 *         extra: {
		 *             hour: 4
		 *             minute: 30
		 *         }
		 *     }, true); // Recursive
         *
         *     // objects then equals:
         *     [
         *         { name: 'dateOfBirth[day]', value: 3 },
         *         { name: 'dateOfBirth[month]', value: 8 },
         *         { name: 'dateOfBirth[year]', value: 1987 },
         *         { name: 'dateOfBirth[extra][hour]', value: 4 },
         *         { name: 'dateOfBirth[extra][minute]', value: 30 },
         *     ];
         *
         * @param {String} name
         * @param {Object/Array} value
         * @param {Boolean} [recursive=false] True to traverse object recursively
         * @return {Object[]}
         */
        toQueryObjects: function (name, value, recursive) {
            var self    = muObject.toQueryObjects,
                objects = [],
                i, ln;

            if (µ.isArray(value)) {
                for (i = 0, ln = value.length; i < ln; i++) {
                    if (recursive) {
                        objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                    }
                    else {
                        objects.push({
                            name : name,
                            value: value[i]
                        });
                    }
                }
            }
            else if (µ.isObject(value)) {
                for (i in value) {
                    if (value.hasOwnProperty(i)) {
                        if (recursive) {
                            objects = objects.concat(self(name + '[' + i + ']', value[i], true));
                        }
                        else {
                            objects.push({
                                name : name,
                                value: value[i]
                            });
                        }
                    }
                }
            }
            else {
                objects.push({
                    name : name,
                    value: value
                });
            }

            return objects;
        },

        /**
         * Берет объект и конвертирует его в строку запроса
         *
         * Non-recursive:
         *
         *     µ.obj.toQueryString({foo: 1, bar: 2}); // returns "foo=1&bar=2"
         *     µ.obj.toQueryString({foo: null, bar: 2}); // returns "foo=&bar=2"
         *     µ.obj.toQueryString({'some price': '$300'}); // returns "some%20price=%24300"
         *     µ.obj.toQueryString({date: new Date(2011, 0, 1)}); // returns "date=%222011-01-01T00%3A00%3A00%22"
         *     µ.obj.toQueryString({colors: ['red', 'green', 'blue']}); // returns "colors=red&colors=green&colors=blue"
         *
         * Recursive:
         *
         *     µ.obj.toQueryString({
     *         username: 'Jacky',
     *         dateOfBirth: {
     *             day: 1,
     *             month: 2,
     *             year: 1911
     *         },
     *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
     *     }, true); // returns the following string (broken down and url-decoded for ease of reading purpose):
         *     // username=Jacky
         *     //    &dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911
         *     //    &hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&hobbies[3][0]=nested&hobbies[3][1]=stuff
         *
         * @param {Object} object The object to encode
         * @param {Boolean} [recursive=false] Whether or not to interpret the object in recursive format.
         * (PHP / Ruby on Rails servers and similar).
         * @return {String} queryString
         */
        toQueryString: function (object, recursive) {
            var paramObjects = [],
                params       = [],
                i, j, ln, paramObject, value;

            for (i in object) {
                if (object.hasOwnProperty(i)) {
                    paramObjects = paramObjects.concat(muObject.toQueryObjects(i, object[i], recursive));
                }
            }

            for (j = 0, ln = paramObjects.length; j < ln; j++) {
                paramObject = paramObjects[j];
                value = paramObject.value;

                if (µ.isEmpty(value)) {
                    value = '';
                } else if (µ.isDate(value)) {
                    value = µ.date.toString(value);
                }

                params.push(encodeURIComponent(paramObject.name) + '=' + encodeURIComponent(String(value)));
            }

            return params.join('&');
        },

        /**
         * Конвертирует строку запроса в объект
         *
         * Non-recursive:
         *
         *     µ.obj.fromQueryString("foo=1&bar=2"); // returns {foo: '1', bar: '2'}
         *     µ.obj.fromQueryString("foo=&bar=2"); // returns {foo: '', bar: '2'}
         *     µ.obj.fromQueryString("some%20price=%24300"); // returns {'some price': '$300'}
         *     µ.obj.fromQueryString("colors=red&colors=green&colors=blue"); // returns {colors: ['red', 'green', 'blue']}
         *
         * Recursive:
         *
         *     µ.obj.fromQueryString(
         *         "username=Jacky&"+
         *         "dateOfBirth[day]=1&dateOfBirth[month]=2&dateOfBirth[year]=1911&"+
         *         "hobbies[0]=coding&hobbies[1]=eating&hobbies[2]=sleeping&"+
         *         "hobbies[3][0]=nested&hobbies[3][1]=stuff", true);
         *
         *     // returns
         *     {
		 *         username: 'Jacky',
		 *         dateOfBirth: {
		 *             day: '1',
		 *             month: '2',
		 *             year: '1911'
		 *         },
		 *         hobbies: ['coding', 'eating', 'sleeping', ['nested', 'stuff']]
		 *     }
         *
         * @param {String} queryString The query string to decode
         * @param {Boolean} [recursive=false] Whether or not to recursively decode the string. This format is supported by
         * PHP / Ruby on Rails servers and similar.
         * @return {Object}
         */
        fromQueryString: function (queryString, recursive) {
            var parts  = queryString.replace(queryRe, '').split('&'),
                object = {},
                temp, components, name, value, i, ln,
                part, j, subLn, matchedKeys, matchedName,
                keys, key, nextKey;

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (part.length > 0) {
                    components = part.split('=');
                    name = components[0];
                    name = name.replace(plusRe, '%20');
                    name = decodeURIComponent(name);

                    value = components[1];
                    if (value !== undefined) {
                        value = value.replace(plusRe, '%20');
                        value = decodeURIComponent(value);
                    } else {
                        value = '';
                    }

                    if (!recursive) {
                        if (object.hasOwnProperty(name)) {
                            if (!µ.isArray(object[name])) {
                                object[name] = [object[name]];
                            }

                            object[name].push(value);
                        }
                        else {
                            object[name] = value;
                        }
                    }
                    else {
                        matchedKeys = name.match(keyRe);
                        matchedName = name.match(nameRe);

                        //<debug>
                        if (!matchedName) {
                            throw new Error('[µ.obj.fromQueryString] Malformed query string given, failed parsing name from "' + part + '"');
                        }
                        //</debug>

                        name = matchedName[0];
                        keys = [];

                        if (matchedKeys === null) {
                            object[name] = value;
                            continue;
                        }

                        for (j = 0, subLn = matchedKeys.length; j < subLn; j++) {
                            key = matchedKeys[j];
                            key = (key.length === 2) ? '' : key.substring(1, key.length - 1);
                            keys.push(key);
                        }

                        keys.unshift(name);

                        temp = object;

                        for (j = 0, subLn = keys.length; j < subLn; j++) {
                            key = keys[j];

                            if (j === subLn - 1) {
                                if (µ.isArray(temp) && key === '') {
                                    temp.push(value);
                                }
                                else {
                                    temp[key] = value;
                                }
                            }
                            else {
                                if (temp[key] === undefined || typeof temp[key] === 'string') {
                                    nextKey = keys[j + 1];

                                    temp[key] = (µ.isNumeric(nextKey) || nextKey === '') ? [] : {};
                                }

                                temp = temp[key];
                            }
                        }
                    }
                }
            }

            return object;
        }
    };
})();
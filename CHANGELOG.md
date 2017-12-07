# v.0.0.8
- fix `enumerables`

# v.0.0.7

## add Core module:

- add function: `µ.isBrowser`	Определяет контекст выполнения
- add function: `µ.event.offLine`	Определяет функции для работы в оффлайне и онлайне


# v.0.0.6

## add String module:

- add function: `µ.str.lat2Rus`	Заменяет похожие с русскими латинские буквы на русские


# v.0.0.4

## add Object module:

  - add function: `µ.obj.getSize`	Возвращает количество свойств объекта
  - add function: `µ.obj.isEmpty`	Проверяет на присутствие свойств в объекте
  - add function: `µ.obj.getKeys`	Возвращает `hasOwnProperty` ключи объекта как массив
  - add function: `µ.obj.getAllKeys`	Возвращает все ключи объекта как массив
  - add function: `µ.obj.getKey`	Возвращает ключ по первому совпавшему значению
  - add function: `µ.obj.merge`	Объединение объектов рекурсивно
  - add function: `µ.obj.toQueryObjects`	Конвертирует пары `name` - `value` в массив объектов с поддержкой вложенных структур.
  - add function: `µ.obj.toQueryString`	Берет объект и конвертирует его в строку запроса
  - add function: `µ.obj.fromQueryString`	Конвертирует строку запроса в объект


## add Date module:

  - add function: `µ.date.now`	Возвращает текущее время
  - add function: `µ.date.getElapsed`	Возвращает количество миллисекунд между двумя датами
  - add function: `µ.date.getShortMonthName`	Возвращает короткое наименование месяца
  - add function: `µ.date.getShortDayName`	Возвращает короткое наименование дня недели
  - add function: `µ.date.getMonthNumber`	Возвращает номер месяца
  - add function: `µ.date.isEqual`	Сравнивает две даты на полную эквивалентность
  - add function: `µ.date.clone`	Создает копию даты
  - add function: `µ.date.getDayOfYear`	Возвращает номер дня в году
  - add function: `µ.date.getWeekOfYear`	Возвращает номер недели в году
  - add function: `µ.date.getFirstDayOfMonth`	Возвращает первый день месяца даты
  - add function: `µ.date.getLastDayOfMonth`	Возвращает последний день месяца даты.
  - add function: `µ.date.getDaysInMonth`	Возвращает количество дней в месяце
  - add function: `µ.date.getFirstDateOfMonth`	Возвращает дату с первым днем месяца даты
  - add function: `µ.date.getLastDateOfMonth`	Возвращает дату с последним днем месяца даты
  - add function: `µ.date.isLeapYear`	Проверка на високосный год
  - add function: `µ.date.clearTime`	Очистка времени у даты
  - add function: `µ.date.add`	Увеличение даты
  - add function: `µ.date.subtract`	Уменьшение даты
  - add function: `µ.date.between`	Проверка на вхождение даты между двумя датами
  - add function: `µ.date.diff`	Расчитывает сколько ВЕЛИЧИН входит в промежуток между датами
  - add function: `µ.date.align`	Выравнивает дату по ВЕЛИЧИНЕ



## Core module:
 - add function: `µ.clone`	Клонирование простых переменных, включая массивы, {}-похожие объекты, DOM nodes и Даты.
  

## Utils module:
 - add function: `µ.utils.pad`	Добавляет ведущий ноль
 - add function: `µ.utils.str_pad`	Заполняет недостающие символы к определенной длинне


## Array module:
 - add function: `µ.array.equals`	Сравнивает содержание двух массивов используя строгое сравнение
 - add function: `µ.array.merge`	Объединяет несколько массивов в один с уникальностью значений



## v.0.0.3
 - add function: `µ.isNative`
 - add function: `µ.event.once`
 - add function: `µ.event.debounce`
 - add function: `µ.utils.getAbsoluteUrl`
//1. Фильтрация уникальных элементов массива

//Допустим, у нас есть массив arr.
//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

//Например:

function unique(arr) {
  /* ваш код */
  return Array.from(new Set(arr))
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O
//P.S. Здесь мы используем строки, но значения могут быть любого типа.
//P.P.S. Используйте Set для хранения уникальных значений.

// 2. Отфильтруйте анаграммы
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    const seenWords = new Set()
    const result = []

    for (const word of arr) {
        const keyWord = word.toLowerCase().split('').sort().join('')

        if (seenWords.has(keyWord)) {
            continue
        }
        seenWords.add(keyWord)
        result.push(word)
    }
    return result

}
alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// 3. Перебираемые ключи
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = map.keys();
keys = Array.from(map.keys())

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
// метод push - это метод массива, а map.keys() - возвращает итерированный объект, который не является массивом 
// для решения задачи преобразовываем итератор в массив и метод push сработает 
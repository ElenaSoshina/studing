// *   Назначение: Объекты используются для хранения коллекций различных значений и более сложных сущностей, в отличие от примитивных типов данных, которые содержат только одно значение.
// *   Создание объекта: Существует два способа создать пустой объект:
//     *   `let user = new Object();` (синтаксис «конструктор объекта»)
//     *   `let user = {};` (синтаксис «литерал объекта»), этот способ используется чаще.
// *   Свойства объекта: Объект состоит из свойств в формате «ключ: значение».
//     *   Ключ — это строка (имя свойства).
//     *   Значение может быть любого типа.
//     *   Пример: `let user = { name: "John", age: 30 };`
// *   Доступ к свойствам: Для доступа к значению свойства используется запись через точку: `alert(user.name);`
// *   Манипуляция свойствами:
//     *   Добавление: `user.isAdmin = true;`
//     *   Удаление: `delete user.age;`
// *   Имена свойств из нескольких слов: Такие имена должны быть заключены в кавычки: `"likes birds": true`
// *   «Висячая запятая»: Последнее свойство в объекте может заканчиваться запятой. Это упрощает управление свойствами.
// *   Константный объект: Объект, объявленный через `const`, может быть изменён (можно изменять и удалять его свойства).

// Привет, object
// let user = {}
// user.name='John'
// user.surname='Smith'
// user.name='Pete'
// delete user.name


// Проверка на пустоту
// function isEmpty(obj) {
//     return Object.keys(obj).length === 0
// }
//
// let schedule = {}
//
// console.log(isEmpty(schedule))
//
// schedule["8:30"] = "get up"
//
// console.log(isEmpty(schedule))

// Сумма свойств объекта
// let salaries = {
//     "John": 100,
//     "Pete": 160,
//     "Mary": 130
// };
//
// function sumSalaries(salaries) {
//     let sum = 0
//     for (let key in salaries) {
//         sum += salaries[key]
//     }
//     return sum
// }
//
// console.log(sumSalaries(salaries))


// Умножаем все числовые свойства на 2
// до вызова функции
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *=2
//         }
//     }
// }
//
// multiplyNumeric(menu)
// console.log(menu)
// 2. Знать ответы на вопросы:
//     1. Какие состояния бывают у промиса? (pending, fulfilled, rejected)
// pending: «в ожидании» — ещё не завершён.
// fulfilled: «успешно выполнен» — есть значение.
// rejected: «отклонён» — есть ошибка.
// Переход только один раз: из pending → fulfilled или rejected. Обратно — нельзя. 
// Часто fulfilled/rejected вместе называют «settled».

//     2. Как работает Promise.all?
// Принимает список (итерируемый) промисов/значений.
// Ждёт, пока все завершатся успешно.
// Результат — массив значений в том же порядке, что на входе.
// Если хотя бы один промис отклонится — весь Promise.all сразу отклоняется этой ошибкой (остальных не ждёт).
// Не отменяет остальные операции; «лишние» всё равно выполнятся (для HTTP — отменять через AbortController).
Promise.all([
    fetch('/a').then(r => r.text()),
    Promise.resolve('b'),
    42
  ]).then(([a, b, c]) => console.log(a, b, c))
    .catch(console.error);

// //     3. Как работает Promise.any?
// Ждёт первый успешно выполненный промис.
// Если все отклонятся — отклонится с AggregateError, в error.errors будет массив всех ошибок.
Promise.any([
    Promise.reject('err1'),
    new Promise(r => setTimeout(() => r('ok'), 100)),
    Promise.reject('err2')
  ]).then(console.log)        // 'ok'
    .catch(e => console.log(e.errors)); // если все упали

//     4. Как работает Promise.race?
// Возвращает результат самого первого «завершившегося» промиса — не важно, успех это или ошибка.
// Отличие от any: race может завершиться ошибкой, если первым завершился rejected-промис; any ждёт именно первый успех.
Promise.race([
    new Promise((_, rej) => setTimeout(() => rej('fail'), 50)),
    new Promise(res => setTimeout(() => res('ok'), 100))
  ]).then(console.log)        // не выполнится
    .catch(console.error);    // 'fail'
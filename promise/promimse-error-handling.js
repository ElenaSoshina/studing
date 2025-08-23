// Любая ошибка/throw/rejected-промис в цепочке попадает в ближайший справа .catch

// .then(f1, f2) vs .then(f1).catch(f2)
// then(f1, f2): f2 ловит только отклонение исходного промиса.
// then(f1).catch(f2): f2 ловит и исходное отклонение, и ошибки, брошенные в f1.then(f1, f2) vs .then(f1).catch(f2)
// then(f1, f2): f2 ловит только отклонение исходного промиса.
// then(f1).catch(f2): f2 ловит и исходное отклонение, и ошибки, брошенные в f1

// Внутри .catch:
// вернуть значение → цепочка продолжитcя как успешно выполненная;
// бросить/вернуть rejected → ошибка пойдёт дальше.

// Глобальные необработанные ошибки
// Если в цепочке нет обработчика, браузер сгенерирует unhandledrejection. Подходит для логирования.
window.addEventListener('unhandledrejection', e => {
    console.error('Uncaught in promise:', e.reason);
});

// ставим catch в конце цепочки 
// используем .then(...).catch(...), а не второй аргумент .then
// в catch необходимо определиться "восстановиться" (вернуть значение) или "пробросить"(вернуть rejected)

// Задачи 
// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ
new Promise(function(resolve, reject) {
    setTimeout(() => {
      throw new Error("Whoops!");
    }, 1000);
  }).catch(alert);

  // catch не выполниться 
// Исполнитель new Promise((resolve, reject) => { ... }) выполняется синхронно и ставит setTimeout; промис остаётся pending.
// .catch(...) —  подписывается и ждёт reject. Поскольку в таймере делается throw (вне промиса), reject не происходит.
// Итог: .catch не срабатывает вообще; через ~1 секунду падает глобальная ошибка Whoops! (не связана с промисом).

// .catch сработает только если промис перейдёт в состояние rejected.
// В setTimeout нужно явно вызвать reject(...), иначе throw там «мимо» промиса.
new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Whoops!')); // теперь промис отклонён
    }, 1000);
  }).catch(alert); 
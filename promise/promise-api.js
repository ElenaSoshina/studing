// Promise.all(iterable)
// Ждёт выполнения всех; результат — массив в исходном порядке.
// Падает сразу при первом reject (остальные результаты игнорируются).
// Можно передавать не-промисы — они попадут «как есть».
// Пример: параллельно загрузить и дождаться всех.
Promise.all([
    new Promise(r => setTimeout(() => r(1), 300)),
    new Promise(r => setTimeout(() => r(2), 100)),
    3 // не-промис — попадёт как есть
]).then(console.log); // [1, 2, 3]

// Promise.allSettled(iterable)
// Ждёт всех, никогда не падает.
// Возвращает массив объектов со свойствами: status и value или reason.
// Удобно, когда важны все результаты, даже с ошибками
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject('err'),
])
.then(console.log);
// [{status:'fulfilled', value:1}, {status:'rejected', reason:'err'}]

// Promise.race(iterable)
// Возвращает результат первого завершившегося промиса (успех или ошибка).
// Полезно для таймаутов/гонок.
Promise.race([
    new Promise(r => setTimeout(() => r('fast'), 100)),
    new Promise((_, j) => setTimeout(() => j('slow error'), 200)),
]).then(console.log).catch(console.error); // 'fast'

// Promise.any(iterable)
// Ждёт первый успешно выполненный промис.
// Если все отклонены — reject с AggregateError (есть массив errors).
Promise.any([
    Promise.reject('a'),
    new Promise(r => setTimeout(() => r('ok'), 100)),
    Promise.reject('c'),
]).then(console.log); // 'ok'

// Promise.resolve(value)
// Возвращает уже выполненный промис с value.
// Используют, чтобы гарантировать «всегда промис» из функции.
function getCached(key, cache) {
    return cache.has(key)
      ? Promise.resolve(cache.get(key))
      : fetch('/data').then(r => r.json());
}

// Promise.reject(error)
// Возвращает отклонённый промис с error.
// Нужен реже (чаще бросают/отклоняют внутри цепочек).
function mustBePositive(n) {
    return n > 0 ? Promise.resolve(n) : Promise.reject(new Error('<= 0'));
  }
  mustBePositive(-1).catch(console.error);

  
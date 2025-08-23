// Обработчики промисов сегда асинхронны 
// Даже есть промис уже выполнен, код после .then/.catch/.finally выполниться раньше обработчиков
Promise.resolve().then(() => console.log('then'));
console.log('sync'); // сначала 'sync', потом 'then'

// Очередь микрозадач (microtasks queue)
// .then/.catch/.finally ставят колбэки в FIFO-очередь микрозадач.
// Выполняются, когда текущий стек кода пуст и ранее добавленные микрозадачи завершились.
// Чтобы гарантировать порядом используем цепочку
Promise.resolve()
  .then(() => console.log('A'))
  .then(() => console.log('B')); // A, затем B

// Необработанные ошибки (unhandledrejection)
// Событие возникает, если к концу цикла микрозадач остался rejected без обработчика.
// Поздний .catch (например, добавленный из setTimeout) не отменит факт unhandledrejection:
const p = Promise.reject(new Error('boom'));
setTimeout(() => p.catch(() => {}), 1000); // уже поздно для предотвращения события

window.addEventListener('unhandledrejection', e => {
  console.log('unhandled:', e.reason.message); // 'boom'
})

// Всегда завершаtv цепочку .catch(...).
// Не откладываем установку .catch на макрозадачи (setTimeout), чтобы избежать unhandledrejection.
// Для предсказуемого порядка действий размещаем следующий шаг в следующем .then, а не «рядом» синхронно.


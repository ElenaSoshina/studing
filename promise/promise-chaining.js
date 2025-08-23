// Идея цепочки: каждый вызов .then возвращает новый промис;
// возвращаемое значение обработчика становится входом для следующего .then.
// Так строится последовательность действий.

// Несколько .then на одном и том же промисе - несколько обработчиков на одноом и том же промисе работают независимо
// и получат один и тот де резуотат

// Возврат промиса из .then: если обработчик возвращает промис, 
// следующий .then ждёт его выполнения и получает его результат. 
// Это позволяет выстраивать асинхронные шаги строго последовательно.

// Цепочка из нескольких .then:

// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   })
//   .then(function(result) {
//     alert(result); // 1
//     return result * 2;
//   })

// пример 
function login(email, password) {
    return fetch('/api/auth/login', {
        method: "POST",
        body: JSON.stringify({email, password})
    })
    .then(async(response) => {
        const data = await response.json().catch(() => {})
        if (!response.ok) {
            const message = data?.message || 'Неизвестная ошибка'
            return Promise.reject(new Error(message))
        }
        return data; // напрмера { user, token }
    })
}

// используем 
login('user@example.com', 'secret')
  .then(({ user, token }) => {
    localStorage.setItem('token', token);
    console.log('Welcome,', user.name);
  })
  .catch((err) => {
    console.error('Login error:', err.message);
  });


// Задача:
// Промисы: сравните then и catch
// Являются ли фрагменты кода ниже эквивалентными?
//  Другими словами, ведут ли они себя одинаково во всех обстоятельствах, для всех переданных им обработчиков?
promise.then(f1).catch(f2);
// против
promise.then(f1, f2);

// нет, не являются

// Первый вариант ловит: исходное отклонение + ошибки из f1.
// Второй вариант ловит только исходное отклонение; для ошибок из f1 нужен последующий .catch.
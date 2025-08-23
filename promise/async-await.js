// async: любая async функция всегда возвращает промис (любое значение внутри оборачивается в resolved промис)
async function f() { return 1; }
f().then(console.log); // 1

// await: ждет промис и возвращает его результат. Работает только внутри async-функций
async function f() {
    const res = await fetch('/api');
    const data = await res.json();
    return data;
}

// Обработка ошибок: через try/catch (аналог then/catch)
async function load() {
    try {
      const r = await fetch('/404');
      if (!r.ok) throw new Error(r.status);
      return await r.json();
    } catch (e) {
      console.error(e);
    }
}

// Thenable: await работает с объектами у которых есть метод then
await { then: (resolve) => resolve(42) } // 42

// Параллель vs последовательно
// Последовательно (ждёт по очереди)
const a = await fetch('/a'); const b = await fetch('/b');

// Параллельно 
const [a, b] = await Promise.all([fetch('/a'), fetch('/b')]);

// Топ‑уровень: в обычных скриптах await нельзя на верхнем уровне — оберачиваем в IIFE.
(async () => {
    const data = await fetch('/api').then(r => r.json());
    console.log(data);
})();

// Задачи 
// 1. Перепишите, используя async/await
// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:
async function loadJson(url) {
    // ждем ответ 
    const response = await fetch(url)
        // если 200 парсим json
        if (response.status == 200) {
          return await response.json();
        } 

        throw new Error(response.status);

}
  
  
loadJson('no-such-user.json')
// catch снаружи так как на верхнем уровне await использовать нельзя без async
    .catch(alert); // Error: 404

// 2. Перепишите, используя async/await
// Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.

// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    const response = await fetch(url)
      
        if (response.status == 200) {
          return await response.json();
        }
          throw new HttpError(response);
        
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
  async function demoGithubUser() {
    while (true) {
        const name = prompt("Введите логин?", "iliakan");
        try{
            const user = await loadJson(`https://api.github.com/users/${name}`)
            alert(`Полное имя: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            continue
        }
        throw err
        }
    }
  }
  
  demoGithubUser();

  // 3. Вызовите async–функцию из "обычной"
  //Есть «обычная» функция. Как можно внутри неё получить результат выполнения async–функции?
  async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
    wait().then(result => {
        console.log(result)
    }).catch(console.error)
  }

  f();
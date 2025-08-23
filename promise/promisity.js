// Промисификация - это преобразование фуекции с колбэком в функцию, которая возвращает промис.
// Удобно для использоватния цепочек и async/await
function loadScript(src, callback) {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => callback(null, s);
    s.onerror = () => callback(new Error(`Ошибка загрузки ${src}`));
    document.head.append(s);
  }
  
  const loadScriptPromise = (src) => new Promise((resolve, reject) => {
    loadScript(src, (err, script) => err ? reject(err) : resolve(script));
  });

  // несколько аргументов
  function promisify(f, manyArgs = false) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        function cb(err, ...results) {
          err ? reject(err) : resolve(manyArgs ? results : results[0]);
        }
        args.push(cb);
        f.call(this, ...args);
      });
    };
  }

// Подходит: функции, которые вызывают колбэк один раз (успех/ошибка).
// Не подходит: многократные события/стримы (колбэк может вызываться много раз) — промис вернёт только первый результат.


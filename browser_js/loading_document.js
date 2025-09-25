// Жизненный цикт HTML страницы:
// 1. DOMContentLoaded - событие, которое происходит когда DOM полностью загружен и готов к использованию
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM построен, можно работать с элементами");
    // Картинки могут еще загружаться
  });

// 2. window.onload - событие, которое происходит когда все ресурсы страницы (картинки, стили, скрипты) полностью загружены
window.addEventListener("load", function() {
    console.log("Страница полностью загружена");
    // Все ресурсы готовы: картинки, стили, iframe
  });

// 3. beforeunload - событие, которое происходит перед тем как пользователь покинет страницу
window.addEventListener("beforeunload", function(event) {
    // Можем предотвратить уход
    event.preventDefault();
    return ''; // Покажет диалог подтверждения
  });

// 4. unload - событие, которое происходит когда пользователь покидает страницу
window.addEventListener("unload", function() {
    // Отправляем статистику
    navigator.sendBeacon('/analytics', data);
  });


// document.readystate
// 1. loading - страница загружается
// 2. interactive - DOM построен, но не все ресурсы загружены
// 3. complete - все ресурсы загружены
document.addEventListener("readystatechange", function() {
    console.log("readystate:", document.readyState);
  });

// Разница между DOMContentLoaded и load
// DOMContentLoaded - событие, которое происходит когда DOM полностью загружен и готов к использованию
// load - событие, которое происходит когда все ресурсы страницы (картинки, стили, скрипты) полностью загружены

// Разница между beforeunload и unload
// beforeunload - событие, которое происходит перед тем как пользователь покинет страницу
// unload - событие, которое происходит когда пользователь покидает страницу

// Что блокирует DOMContentLoaded?
// синхранные скрипты 
// css файлы, если поссле них есть скрипт

//Загрузка скриптов defer/async
// при обычной загрущке страницы скрипты блокируют рендеринг до полной загрузки 
// не видят DOM ниже - не можем обращаться к элементам ниже скрипта 

// defer - скрипты загружаются асинхронно, но выполняются после того как DOM построен
<script defer src="script.js"></script>
//  Не блокирует рендеринг страницы
//  Загружается параллельно с HTML
//  Выполняется после построения DOM
//  Сохраняет порядок выполнения скриптов
//  Выполняется ДО DOMContentLoaded

// async - скрипты загружаются асинхронно, но выполняются не обязательно после построения DOM (никого не ждут и их никто не ждет)
<script async src="script.js"></script>
//  Не блокирует рендеринг
//  Загружается параллельно с HTML
//  Выполняется сразу после загрузки
//  НЕ сохраняет порядок (первый загруженный = первый выполненный)
//  НЕ ждет DOMContentLoaded



// Два ключевых события для отслеживания загрузки ресурсов:
// load - все ресурсы загружены
// error - ошибка загрузки ресурса

let script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js';

script.onload = function() {
  console.log('Скрипт загружен:', _.VERSION);
  // Теперь можно использовать функции из библиотеки
};

script.onerror = function() {
  console.log('Ошибка загрузки:', this.src);
};

document.head.append(script);

// Когда начинается загрузка разных ресурсов?
// Изображения - сразу при установке src
// Скрипты - после добавления в документ
// CSS - после добавления в документ

// Как предзагрузить изображения?
// Создать элементы Image, установить обработчики, затем src

// В чем особенность iframe.onload?
// Всегда срабатывает load, даже при ошибке (историческая особенность)

// 1. Загрузите изображения с колбэком
// Обычно изображения начинают загружаться в момент их создания. Когда мы добавляем <img> на страницу, пользователь не увидит его тут же. Браузер сначала должен его загрузить.
// Чтобы показать изображение сразу, мы можем создать его «заранее»:

let img = document.createElement('img');
img.src = 'my.jpg';
// Браузер начнёт загружать изображение и положит его в кеш. Позже, когда такое же изображение появится в документе (не важно как), оно будет показано мгновенно.
// Создайте функцию preloadImages(sources, callback), которая загружает все изображения из массива sources и, когда все они будут загружены, вызывает callback.
// В данном примере будет показан alert после загрузки всех изображений.

function loaded() {
  alert("Изображения загружены")
}

preloadImages(["1.jpg", "2.jpg", "3.jpg"], loaded);
// В случае ошибки функция должна считать изображение «загруженным».
// Другими словами, callback выполняется в том случае, когда все изображения либо загружены, либо в процессе их загрузки возникла ошибка.
// Такая функция полезна, например, когда нам нужно показать галерею с маленькими скролящимися изображениями, и мы хотим быть уверены, что все из них загружены.

<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>

  <script>
    function preloadImages(sources, callback) {
      /* ваш код */
      if (sources.length === 0) {
        callback()
        return
      }

      let loadedCount = 0
      let totalCount = sources.length
      function onComplete() {
        loadedCount++
        if (loadedCount === totalCount) {
            callback()
        }
      }

      sources.forEach(function(src) {
        const img = new Image()

        img.onload = onComplete
        img.onerror = onComplete
        img.src = src
      })
    }

    // ---------- тест ----------

    let sources = [
      "https://en.js.cx/images-load/1.jpg",
      "https://en.js.cx/images-load/2.jpg",
      "https://en.js.cx/images-load/3.jpg"
    ];

    // добавляем случайные символы к ссылкам, чтобы избежать кеширования
    for (let i = 0; i < sources.length; i++) {
      sources[i] += '?' + Math.random();
    }

    // для каждого изображения
    // создадим другое изображение с аналогичным src и проверим, есть ли у нас его ширина
    function testLoaded() {
      let widthSum = 0;
      for (let i = 0; i < sources.length; i++) {
        let img = document.createElement('img');
        img.src = sources[i];
        widthSum += img.width;
      }
      alert(widthSum);
    }

    // каждое изображение в разрешении 100x100, итоговая сумма их ширин должна быть 300
    preloadImages(sources, testLoaded);
  </script>

</body>
</html>
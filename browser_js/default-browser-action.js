//  Как отменить действие браузера по умолчанию?
// event.preventDefault() или return false (только для on-обработчиков)
link.addEventListener('click', function(event) {
    event.preventDefault(); // Отменяет переход по ссылке
    console.log('Ссылка заблокирована');
  });

  <a href="/" onclick="return false">Не перейдет</a>
<a href="/" onclick="event.preventDefault()">Не перейдет</a>

//  В чем разница между preventDefault() и return false?
// peventDefault() - работает везде
// return false - только в on-атрибутах (onclick="")

//  Что такое опция passive?
// Оптимизация для браузера: говорит, что preventDefault() не будет вызван
// Говорим браузеру: "preventDefault() НЕ будет вызван"
element.addEventListener('touchmove', handler, { passive: true });

// Браузер может начать прокрутку не дожидаясь завершения обработчика

//  Как проверить, отменено ли действие?
// event.defaultPrevented возвращает true/false
element.onclick = function(event) {
    // event.defaultPrevented - true если действие отменено
    if (event.defaultPrevented) {
      console.log('Действие уже отменено');
    }
  }

//  Примеры действий по умолчанию?
// Переход по ссылке
// Отправка формы
// Выделение текста
// Контекстное меню

// 1. Почему не работает return false?
// Почему в коде ниже return false не работает?

<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>

<a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a> //броузер создает функцию handler() и вызывает ее но не возвращает ее результат

// Браузер переходит по указанной ссылке, но нам этого не нужно.
// Как поправить? 
onclick="return handler()"  // возвращает результат функции handler()



// 2. Поймайте переход по ссылке
// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
// Так это должно работать:


// Детали:

// Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
// Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.
// <!DOCTYPE HTML>
// <html>

// <head>
//   <meta charset="utf-8">
//   <style>
//     #contents {
//       padding: 5px;
//       border: 1px green solid;
//     }
//   </style>
// </head>

// <body>

//   <fieldset id="contents">
//     <legend>#contents</legend>
//     <p>
//       Как насчёт того, чтобы прочитать <a href="https://wikipedia.org">Википедию</a> или посетить <a href="https://w3.org"><i>W3.org</i></a> и узнать о современных стандартах?
//     </p>
//   </fieldset>
// <script>
//   document.getElementById("contents").addEventListener('click', function(event){
//     let targetEl = event.target.closest('a')

//     if (targetEl) {
//       let leave = confirm(`Покинуть страницу и перейти на ${targetEl.href}`)

//       if (!leave) {
//         event.preventDefault()
//       }
//     }
//   })
// </script>
// </body>
// </html>

{/* 3. Галерея изображений
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант. */}
<!DOCTYPE HTML>
<html>

<head>
  <title>Галерея</title>
  <link rel="stylesheet" href="gallery.css">
  <meta charset="utf-8">
</head>

<body>

  <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>

  <ul id="thumbs">
    <!-- браузер показывает небольшую встроенную подсказку из атрибута "title" при наведении курсора на текст -->
    <li>
      <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
    </li>
  </ul>

  <script>
    document.getElementById("thumbs").addEventListener('click', function(event){
      let link = event.target.closest('a')

      if (link) {
        event.preventDefault()

        document.getElementById('largeImg').src = link.href
        document.getElementById(largeImg).alt = link.title
      }
    })
  </script>

</body>
</html>
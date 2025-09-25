// window - это глобальный объект в браузерном окружении, который предоставляет доступ к DOM и API браузера.
//представляет окно браузера
//все глобальные переменные и функции становятся свойствами window

//document - свойство window, представляет DOM страницы
// он предоставляет доступ к HTML-элементам и их свойствам

// В чем разница между DOM и BOM?
// две модели для работы с браузером:
// DOM - для работы с документом/контентом - доступен через window.document
// BOM - для работы с браузером (навигация, диалоги, история) - доступен через window

// Как получить размеры окна браузера?
// window.innerWidth/innerHeight - внутренние размеры
// window.outerWidth/outerHeight - внешние размеры

// DOM (Document Object Model)
// Определение: объектная модель документа, представляет содержимое страницы как объекты
// Входная точка: объект document
// Возможности: создание, изменение элементов страницы
// Спецификация: DOM Living Standard (https://dom.spec.whatwg.org)
document.body.style.background = "red";
setTimeout(() => document.body.style.background = "", 1000);

// BOM (Browser Object Model)
// Определение: дополнительные объекты браузера для работы со всем, кроме документа
// Ключевые объекты:
// navigator - информация о браузере и ОС (navigator.userAgent, navigator.platform)
// location - работа с URL (location.href, перенаправления)
// alert/confirm/prompt - диалоги с пользователем

// DOM (Document Object Model)
// Все, что связано с содержимым страницы:
// DOM - работа с документом и его элементами
// window.document                    
// window.document.getElementById()   
// window.document.createElement()      
// window.document.body              
// window.document.head             
// window.document.title             
// window.document.forms             
// window.document.images            

// // События элементов (тоже DOM)
// element.addEventListener()        

// BOM (Browser Object Model)
// Все, что связано с браузером как приложением:
// Информация о браузере
window.navigator                  
window.navigator.userAgent        
window.navigator.platform         
window.navigator.language         
window.navigator.onLine           

// Навигация и URL
window.location                   
window.location.href              
window.location.reload()        
window.history                    
window.history.back()             

// Размеры и позиция окна браузера
window.innerWidth                 
window.innerHeight                
window.outerWidth                 
window.outerHeight                
window.screenX                    
window.screenY                    
window.scrollX                    
window.scrollY                    

// Информация об экране
window.screen                     
window.screen.width               
window.screen.height              

// Управление окнами
window.open()                     
window.close()                    
window.focus()                    
window.blur()                     
window.print()                    

// Диалоги пользователя
window.alert()                    
window.confirm()                  
window.prompt()                   

// Таймеры
window.setTimeout()               
window.setInterval()              
window.clearTimeout()             
window.clearInterval()            
window.requestAnimationFrame()    

// Хранилища
window.localStorage               
window.sessionStorage    
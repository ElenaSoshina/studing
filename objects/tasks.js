// Задачи:

// 1. Выводится undefined, нужно исправить (два способа)
const user = {
    name: 'Alice',
    greet() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
}

// user.greet();

// Функция выводит underfined, так как this внутри setTimeout не ссылается на объект user
// стрелочная функция (не имеет своего this и ссылается на внешнюю функцию)
const userArrow = {
    name: 'Alice',
    greet() {
      setTimeout(() => {
        console.log(`Hello, ${this.name}`);
      }, 1000);
    }
  };
  
//   userArrow.greet();

  // превязать контекст через bind
  const userBind = {
    name: 'Alice',
    greet() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}`);
        }.bind(this), 1000);
    }
  }

//   console.log(userBind.greet());


// 2. Напишите глубокое копирование объекта
const obj = {
    a: 1,
    b: {
      c: 2
    }
  };
  
  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    const clone = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
  }

  const clonedObj = deepClone(obj);

//   console.log(clonedObj);

  // проверяем является ли объектом или массивом,если нет - возвращаем, если да создаем новый объект или массив и рекурсивно копируем собственные свойства

  // 3. Напишите функцию groupBy, которая группирует объекты по полю
  const people = [
    { name: 'Alice', city: 'Paris' },
    { name: 'Bob', city: 'London' },
    { name: 'Charlie', city: 'Paris' }
  ];
  
  // groupBy(people, 'city');
  /*
  {
    Paris: [{...}, {...}],
    London: [{...}]
  }
  */
  
  function groupBy(arr, key) {
    const groups = {}
    for (let item of arr) {
        const group = item[key]; // получаем значение поля key по которым группируем
        if (!groups[group]) { //если группа не существует, создаем ее
            groups[group] = []
        }
        groups[group].push(item) // добавляем элемент в соответствующую группу
    }
    return groups
  }

//   console.log(groupBy(people, 'name'));

// 4. Напишите реализацию EventEmitter. EventEmiitter - это класс, который позволяет добавлять и удалять обработчики событий, а также выпускать (emit) события
class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(event, callback) {
       
        if (!this.events[event]) {
          this.events[event] = [];
        }
        
        this.events[event].push(callback);
        
        
        return this;
      }
      
      
      emit(event, ...args) {
        
        if (this.events[event]) {
          
          const handlers = this.events[event].slice();
          for (let handler of handlers) {
            handler(...args);
          }
        }
        return this;
      }
      
      
      pop(event) {
        if (this.events[event] && this.events[event].length) {
          this.events[event].pop();
        }
        return this;
      }
}

const ee = new EventEmitter();
const cb1 = () => console.log('cb1');
const cb2 = () => console.log('cb2');

ee
	.on('abc', cb1)
	.on('abc', cb2)
	.emit('abc') // cb1, cb2
	.pop('abc')
	.emit('abc'); // cb1



    // 5. Реализуйте функцию throttle(fn, delay), которая вызывает fn не чаще, чем раз в delay миллисекунд, даже если вызывается чаще.
    // function throttle(fn, delay) {
    //     let isThrottled = false, savedArgs, savedThis;
      
    //     function wrapper(...args) {
    //       if (isThrottled) {
    //         savedArgs = args;
    //         savedThis = this;
    //         return;
    //       }
      

    //       fn.apply(this, args);

    //       isThrottled = true;
      
    //       setTimeout(() => {
    //         isThrottled = false;

    //         if (savedArgs) {
    //           wrapper.apply(savedThis, savedArgs);
    //           savedArgs = savedThis = null;
    //         }
    //       }, delay);
    //     }
      
    //     return wrapper;
    //   }
    
    // // const f = () => console.log("ping");
    
    // const throttledF = throttle(f, 500);
    // throttledF(); // ping
    // setTimeout(throttledF, 100) // -
    // setTimeout(throttledF, 600)  // ping

// 6. Реализуйте функцию debounce(fn, delay), которая откладывает вызов функции fn на время delay с последнего вызова
function debounce(fn, delay) {
    let timerId; //  идентификатор текущего setTimeout
  
    return function(...args) {
      
      clearTimeout(timerId);
      
      //новый таймер, по истечении delay будет вызвана оригинальная функция fn
      timerId = setTimeout(() => {
        fn.apply(this, args); // передам в fn текущий контекст и аргументы
      }, delay);
    };
  }

const f = () => console.log("ping");
const debouncedF = debounce(f, 500);

debouncedF(); // -
debouncedF(); // -
debouncedF(); // спустя 500мс - ping

function createCounter() {...}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2

console.log(counter1()); // 4
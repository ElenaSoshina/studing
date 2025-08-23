// Задача: Вычислить сумму чисел до данного
// function sumToLoop(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(sumToLoop(100))

// function sumToRecursion(n) {
//    return n == 1 ? 1 : n + sumToRecursion(n - 1) 
// }

// console.log(sumToRecursion(100))
// function sumToFormula(n) {
//     return n * (n + 1) / 2
// }

// console.log(sumToFormula(100))

// Moжно ли рекурсией посчитать sumToRecursion(100000)? - нетб переполнение стека примерно на 10000

// Задача: Вычислить факториал - число умноженное на все предыдущие числа до 1

// function factorial(n) {
//    return n <= 1 ? 1 : n * factorial(n -1) 
// }

// console.log(factorial(5))

// Задача: Числа Фибоначчи - каждое число равно сумме двух предыдущих
// function fib(n) {
//     return n <= 1 ? 1 : fib(n-1) + fib(n-2)
// }

// console.log(fib(77))

// оптимизация для большших процессов ( записываем результат предыдущих вычислений в переменные - каждое число вычисляется один раз и используется для следующего)
// function fibIterate(n) {
//     if (n <= 1) return n;

//     let prev = 0, current = 1;
//     for (let i = 2; i <= n; i++) {
//         let next = prev + current;
//         prev = current;
//         current = next;
//     }
//     return current;
// }

// console.log(fibIterate(77))

// Задача: Вывод односвязного списка - структура данных, состоящая из узлов, где каждый узел содержит значение и ссылку на следующий узел
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printList(list) {
    let current = list;
    while (current != null) {
        console.log(current.value)
        current = current.next
    }
  }

//   printList(list)

  function printListRecursive(list) {
    if (list === null) return 
    console.log(list.value);
    printListRecursive(list.next)
  }

//   printListRecursive(list)

  // Задача: Вывод односвязного списска в обратном порядке
  let list2 = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printRevertList(list2) {
    let result = [];
    let current = list2;
    while (current !== null) {
        result.push(current.value);
        current = current.next
    }

    result.reverse().forEach(value => console.log(value))
  }


// printRevertList(list2)
// сначала обрабатываем следующий элемент, затем выводим в консоль текущий

function printRevertListRecursion(list2) {
    if (list2 === null) return

    printRevertListRecursion(list2.next)
    console.log(list2.value)

}

printRevertListRecursion(list2)

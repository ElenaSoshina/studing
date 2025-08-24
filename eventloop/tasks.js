// Задачи. В каком порядке выведутся логи?
console.log('Начало'); //1

setTimeout(() => {
	console.log('setTimeout');  //7
}, 10);

const p = new Promise((res) => {
	console.log("promise executor") //2
	res("promise resolved value")
})

p
.then(() => {
	console.log('Promise 1'); //4
})
.then(() => {
	console.log('Promise 2'); //5
});

setTimeout(() => {
	console.log('setTimeout 2'); //6
}, 0);

console.log('Конец'); //3


// 2
async function f() {
    console.log(1); //1
    const promise = new Promise((resolve) => {
      console.log(2); //2
      setTimeout(() => {
        console.log(3); //5
        resolve('готово!');
        console.log(4); //6
      });
    });
    console.log(5); //3
  
    const result = await promise;
    console.log(6); //7
    console.log(result); //8
    return 'Result';
  }
  
  f();
  console.log(7); //4
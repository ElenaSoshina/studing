// Типизируй следующие переменные и функции. 

const user1: string = "Алексей"

const age: number = 25

const isStudent: boolean = true

const salary: number | null = null

const nickname: string | undefined = undefined

let fruits: string[] = ["яблоко", "банан", "апельсин"]

let scores: number[] = [10, 20, 30, 40]

let flags: boolean[] = [true, false, true]

let mixed:(string | number)[] = [1, "два", 3, "четыре"]

let tasks:any[] = [] // let tasks: string[] = []

let person:{name: string, age: number} = { name: "Мария", age: 30 }

let book:{title: string, pages: number, isPublished: boolean} = { title: "Война и мир", pages: 1225, isPublished: true }

let car:{brand: string, year: number} = { brand: "Toyota", year: 2020 }

let user:{name: string, roles:string[]} = { name: "Иван", roles: ["admin", "editor"] }

let product:{id: number, name: string, tags: string[]} = { id: 101, name: "Ноутбук", tags: ["electronics", "computer"] }

function greet(name: string): string { return "Привет, " + name }

function sum(a:number, b:number):number { return a + b }

function isEven(num:number): boolean { return num % 2 === 0 }

// function printArray(arr:any[]):void { arr.forEach(item => console.log(item)) }
function printArray(arr:unknown[]):void { arr.forEach(item => console.log(item)) }

function getUserInfo(user: {name: string, age: number}):string { return "Name: " + user.name + ", Age: " + user.age }


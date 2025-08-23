function sum (n) { // 2
    if (n === 1) return 1; // sum (n - 1) === 1
    return n + sum(n-1)
}

const res = sum(2) // 2 + 1
console.log(res)



function sumOdd (n) { // 2
    if (n === 1) return 1;
    return n % 2 ? n + sumOdd(n-2) : sumOdd(n-1)
}


const res = sumOdd(5) // 5 + 3 + 1
const res1 = sumOdd(6) // 5 + 3 + 1

console.log(res, res1);
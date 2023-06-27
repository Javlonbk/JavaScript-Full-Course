// Task1: sum(5) => 5+4+3+2+1 = 15
// let s = 0;
// function sum(n) {
//     if(n === 1) return s += 1;
//     else{
//         s += n;
//         return sum(n-1)
//     }

// }
// console.log(sum(5));

// Task2: factorial numbers;
// 1! = 1;
// 2! = 2*1;
// 3! = 3*2*1
// .........

// let F = 1;
// function findFacNum(n) {
//     if(n === 1) return F *= 1;
//     else{
//         F *= n;
//         return findFacNum(n-1)
//     }
// }
// console.log(findFacNum(3));


// Task3: Fibonacci numbers

// with loop
// function fibN(n) {
//     let num1 = 0;
//     let num2 = 1;
//     let sum;
//     for (let i = 0; i < n; i++) {
//         sum = num1 + num2;
//         num1 = num2;
//         num2 = sum;
//     }
//     return num2
// }

// with recursion
function fibN(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    else return fibN(n-1) + fibN(n-2)
}

console.log(fibN(11));
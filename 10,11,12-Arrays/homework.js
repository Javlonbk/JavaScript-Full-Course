// Task1: There is a array that  has strings elements, You  find number of every letters then letters and their numbers write in a object. ??????????????????
// let arr = ['Javlonbek', 'Abdurasulov'];
// let newArr = arr.join('').toLowerCase().split('').sort();

// let obj = {};
// newArr.map((value, index, newArr) => {
//      if(newArr.indexOf(value) == index){
//         obj[`${value}`] = 1
//      }
// })
// console.log(newArr);
// console.log(obj);


// Task2: find sum of numbers in the array;
let arr = [1,2,3,4,5,6,7,8,9];

// let sumArr = arr.reduce((sum,current) => sum += current, 0);

// <----optimal solution------->
let sumArr = eval(arr.join('+'))

console.log(sumArr);

// Task3: find numbers of char in the array
// let arr = ['webbrain', 'academy'];
// let result = arr.join('').length;
// console.log(result);


// Task4: change according to below statements:????????????????
// camelize('background-color') => 'backgroundColor';

// function camelize(str) {
//     return str.indexOf('-',5);

// }

// console.log(camelize('list-style-image'));


// // Task5: output the 2-digit numbers in the array.
// let arr = [1, 23, 44, 5, 7, 65];
// let result = arr.filter(value => {
//     return value / 10 >= 1
// })
// console.log(result);
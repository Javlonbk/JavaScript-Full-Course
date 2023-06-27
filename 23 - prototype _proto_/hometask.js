// Task1
let obj = {name: "Apple", weigh:'15kg', color:'red' }

// Object.prototype.remove = function(key){
//     for(value in this){
//         value === key ? delete this[`${key}`] : this
//     }
//     console.log(this);
//     return this
// }

// obj.remove('weigh')


// Task2


// Object.prototype.set = function (key, propert, value) {
//     Object.defineProperty(this,`${key}`, )
// };

obj.set('name', 'writable', false);
// console.log(obj);

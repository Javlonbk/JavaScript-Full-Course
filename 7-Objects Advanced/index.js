// this to call its parent

// data = {
//     name:'User1',
//     sayHi(){
//         console.log(`Hi ${this.name}`)
//     }
// }

// data.sayHi()

// function getName() {
//     this.name = 'User'
//     this.sayHi = function () {
//         console.log(`Hi ${this.name}`)
//     }
//     console.log(this)
// }

// console.log(new getName().name)
// console.log(new getName().sayHi())

let user = {
   name: 'User1',
   age: 12,
   status: 'mentor',
   child:{
    names:'User1.1'
   }
}

// const {name, age, status, child:{childname}} = user;

// console.log(name, childname);

console.log({...user, name:'newUser1'})
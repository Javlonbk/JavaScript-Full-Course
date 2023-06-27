// No1
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// for(i in obj){
//     console.log(i)
// }

// No2
// let obj={
//     id:1,
//     name:"WebBrain"
// }
// for(i in obj){
//     if(typeof obj[`${i}`] == 'number') console.log(i);
// }

// No3   
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// for(i in obj){
//     if(typeof obj[`${i}`] == 'boolean') console.log(`${i}: ${obj[`${i}`]}`);
// }

// No4 
// function Search(obj, str) {
//     for(i in obj){
//         if(obj[`${i}`] == str) console.log(`${i}: ${obj[`${i}`]}`);
//     }
// }
// Search(obj, 'WebBrain');

// No6
// let person = {
//     id: 1,
//     name: 'Odil',
//     age:78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age:48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age:20
//         }
//     }
// }
// let sum = 0;
// while(person){
//     // console.log(person.age);
//     sum += person.age
//     person = person.child

// }
// console.log(sum);

// No8
// let arr=[
//     {id:1,name:'Usmon',job:'developer'},
//     {id:2,name:'Usmon',job:'developer'},
//     {id:3,name:'Usmon'},
//     {id:4,name:'Usmon',job:'developer'},
//     {id:5,name:'Usmon'}
// ]
// let i = 0;
// while(arr[i].job){
//     console.log(arr[i]);
//     i++
// }

// No9

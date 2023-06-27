// #    /////////////////object/////////////////
// No9
// let obj={
//     id:1,name:'Usmon',job:'developer'
//     }

// const obj2 = structuredClone(obj);
// obj.status = 'employed';
// console.log(obj);
// console.log(obj2);

// No10
// let obj = {};
// function add(obj, key, value) {
//     obj[`${key}`] = value;
// }
// add(obj, 'car', 'BMW');
// add(obj, 'car2', 'Mercedes');
// console.log(obj);

// No11
// let obj = {
//     id: 1,
//     name: 'Usmon',
//     job: 'developer',
//     practice:1
// }
// if(obj.practice >= 1) console.log('qabul qilindi');
// else console.log('ming bor uzur');

// No12
// let obj = {
//         id: 1,
//         name: 'Usmon',
//         job: 'developer',
//         practice:1,
//         talaba:true
//     }
// if(obj.talaba) obj.kiridit = true;
// else obj.kiridit = 'olinmadi';
// console.log(obj);

// No14
// let arr=[
//     {id:3,name:'Usmon',parol:'1231'},
//     {id:1,name:'Umar',parol:'1241'},
//     {id:5,name:'Jasur',parol:'3452'},
//     {id:2, name:'Asmo',parol:'2312'},
//     {id:4,name:'Salohiddin',parol:'3421'}
// ]

// function logIn(name, password) {
//    let isHere;
//     for (let i = 0; i < arr.length; i++) {
//         if(name == arr[i].name && password == arr[i].parol) isHere = true;
//         else isHere = false
//     }
//     isHere ? console.log('Xush kelibsiz') : console.log('login yoki parol xato');

// }
// logIn('Umar','2113');
// logIn('Salohiddin','3421');

// No15   ??????????????????????????????????????????????
// let obj={
//   id:1,
//   title:'the best',
//   address:{street:"Farobiy",number:'34'}
// }
// while(obj){
//     obj = obj.address
//     console.log(true)
// }

// No16
let person = {
    id: 1,
    name: 'Umar',
    surname: 'Ismoilov',
}
function addIelts(arr, value){
         arr.ielts = value
}
addIelts(person, 5.5);
// 2-shart, 3-shart
if(person.ielts >= 5.5){ console.log('Qabul qilindi!'), person.student = true;}
else {console.log('Qayta topshirish kerak!');}

// 4-shart
const password = Math.trunc(Math.random()*1000);
console.log(password);
if(person.student == true) person.password = password + person.id;

// 5-shart
function Enter(pass, name) {
    if(name == person.name && pass == person.password) console.log('Xusg kelibsiz!');
    else console.log('Parol yoki ism xato!');
}


// console.log(person);
Enter(password,'Umar') //=> hush kelibsiz
Enter(10,'Umar')  // => parol yoki name xato
Enter(101,'Ali')   // => parol yoki name xato


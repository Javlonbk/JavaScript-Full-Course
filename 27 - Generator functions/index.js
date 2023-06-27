// built generator function.
// function* getDate(){
//     yield 1
//     yield 2
 
// }

// const generator = getDate();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//built unique id for array
let users = [
    { id: 1, name: "Eshmat1" },
    { id: 2, name: "Eshmat2" },
    { id: 3, name: "Eshmat3" },
    { id: 4, name: "Eshmat4" },
    { id: 5, name: "Eshmat5" },
    { id: 6, name: "Eshmat6" },
  ];
  
function* getDate() {
    let i = users.length + 1;
    while(true){
        yield ++i
    }
}

const generator = getDate();

const onDelete = (id) => {
    let res = users.filter(user => user.id !== id)
     users = res
}
const onAdd = (usr) => {
    users = [...users, {id:generator.next().value, name:usr}]
}


onAdd('Eshmat7')
onDelete(4)
onAdd('Eshmat8')
onDelete(2)
console.log(users);
let students = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Topilov" },
    { id: 3, year: 2002, name: "Najmiddin Nazarov " },
    { id: 4, year: 2002, name: "Mominov Abdulloh" },
    { id: 5, year: 1995, name: "Sardor Tursunboyev" },
    { id: 6, year: 2002, name: "Hudoyberdieva Mohichehra " },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shukurov Shohruh" },
  ];

// delete user
const deleteUser = (id) => {
    let res = students.filter((value) => value.id !== id);
    return students = res;
}
//   deleteUser(5);

// create user
const createUser = (user) => {
    students = [...students, {...user} ];
}
// createUser({id: students.length + 1, name:'Otash', year:2001});


// sort
const sortByAlphabet = () => {
    let res = students.sort((a,b) => a.name.localeCompare(b.name));
    return students = res;
}
sortByAlphabet()

const sortByYear = () => {
    let res = students.sort((a,b) => a.year-b.year);
    return students = res;
}
sortByYear()

const sortByInputName = (name) => {
    let res = students.filter(value => value.name.toLowerCase().includes(name.toLowerCase()))
    return students = res;
}
// sortByInputName('shukurov')

const updateUser = ({id, key, value}) => {
    let res = students.map((usr => usr.id == id ? {...usr, key: value} : usr))
    return (students = res)
}
updateUser({id:4, key:'name', value: 'Oley'});




console.log(students)
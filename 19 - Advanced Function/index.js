let user = {
    name: "Webbrain",
    lastname: "Academy",
    title: "IT Center",
  };
let users = [
    {
      name: "Webbrain",
      lastname: "Academy",
      title: "IT Center",
    },
    {
      name: "Digital",
      lastname: "One",
      title: "IT Center",
    },
];

// function getFull(a) {
//     console.log(a)
//     console.log(`${this.name} ${this.lastname}`)
// }

// getFull.call(user, 'by call');
// getFull.apply(user, ['by appy']);
// let bindRes =  getFull.bind(user, 'by bind');
// bindRes();

function getFull(a){
  console.log(a)
  console.log(this.name, this.lastname)
}

// getFull.call(user, 'call');
// getFull.apply(user, ['apply']);
getFull.bind(user,'bind')();
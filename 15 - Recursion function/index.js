// Recursion

// let res = 0;
// const  sum = (n) =>{
//     if(n === 1) return res += n;
//     else{
//         res += n;
//         return sum(n-1)
//     }
// }

// sum(12)
// console.log(res);

let company = {
    sales: [
      { name: "John", salary: 1000 },
      { name: "Alice", salary: 1600 },
    ],
    development: {
      sites: [
        { name: "Peter", salary: 2000 },
        { name: "Alex", salary: 1800 },
      ],
      internals: [{ name: "Jack", salary: 1300 }],
    },
  };
let sum  = 0;
function getCalc(company) {
  if(Array.isArray(company)){
    return company.reduce((prev, current) => current.salary + prev,0)
  }
  else {
    let sum = 0
    for(let subdep of Object.values(company)){
       sum += getCalc(subdep)
    }
    return sum;
  }
}

console.log(getCalc(company));
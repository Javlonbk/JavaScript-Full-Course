// function getData(a){
//     return (b) => {
//         return (c) => {
//             console.log(a + b + c)
//         };
//     };
// }

// getData(1)(2)(3)

const operations = (type) => {
    return (a) => (b) => (c) =>{
        switch(type){
            case 'add': return a+b+c; break;
            case 'subs': return a-b-c; break;
            case 'divide': return a/b/c; break;
            case 'multiply': return a*b*c; break;
        }
    }
}

let result = operations('multiply')(1)(2)(3)

console.log(result);
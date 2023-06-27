// try catch
// try{
//     // console.log(a)
//     // a = 3;
//     throw new Error('KALLAAAAAAAAAA')
// }
// catch (error) {


//     console.log(error.message)
//     // console.log(error.name);
//     // console.log(error.message);
//     // console.log(error.stack);
// }

// Callback

var database = {
    Javlonbek: {
      login: "Javlonbek",
      password: 12345,
      fullname: "Javlonbek Abdurasulov",
    },
    sardorbek: {
      login: "sardorbek",
      password: 12345,
      fullname: "Sardorbek Sardorbek",
    },
  };

console.log('started...');  

// const login = (login, password, callback) => {
//     setTimeout(() => {
//         if(login === database.Javlonbek.login && password === database.Javlonbek.password){
//             return callback(database.Javlonbek.fullname + ', Welcome to Instagram!')
//          }
//          else{
//             return callback('Parol xato kiritildi!')
//          }
//     }, 1000)
    
// }

// const callback = (usr) => {
//     console.log(usr);
//     console.log('finished')
// }

// login('Javlonbek', 12345, callback);

// Callback hell - calback function in callback function
// const login = (login, password, callback) => {
//     setTimeout(() => {
//         if(login === database.Javlonbek.login && password === database.Javlonbek.password){
//             return callback(
//                 database.Javlonbek.login + ', Welcome to Instagram!',
//                 () => `${database.Javlonbek.fullname}`
//                 )
//          }
//          else{
//             return callback('Parol xato kiritildi!')
//          }
//     }, 1000)
    
// }


// login('Javlonbek', 12345, (usr, getFullname) => {
//     console.log(usr);
//     console.log(getFullname())
//     console.log('finished')
// });

// Promise 
let user = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (
      database.Javlonbek.login === "Javlonbek" &&
      database.Javlonbek.password === 12345
    )
      resolve(` Welcome to Facebook`);
    else reject(`Qo'chqorvoy aka paroliz notogri`);
  }, 1000);
});

// async function get() {}
const get = async () => {
  let res = await user;
  console.log(res);
  console.log("finished");
};
get();
user.then((res) => console.log(res));

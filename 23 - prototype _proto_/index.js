let user1 = { name: "webbrain" };
let user2 = { title: "Academy" };

// // Object.assign(user1, user2);
// user1.__proto__ = user2

// console.log(user1, user1.title);

// let user = { name: "webbrain", last: "Academy" };
// let hey = { name: "pdp", last: "Academy" };
// let he = { name: "NT", last: "Academy" };


// Object.prototype.fullName = function () {
//     console.log(this.name, this.last);
// }
// hey.fullName()

let arr = [1, 2, 3, 4, 5, 3, 3, 2];

Array.prototype.remove = function (n){
    let res = this.filter(value => value !== n)
    console.log(res)
    return res
}

arr.remove(2);



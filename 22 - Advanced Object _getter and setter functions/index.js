// let user = { name: "webbrain", title: "IT Center", getData() {} };

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));

// Object.defineProperty(user, 'getData', { enumerable:false});

// Object.defineProperty(user, 'title', {writable:false, configurable:false});
// user.title = 'Hello'
// delete user.title
// console.log(user)

const user = {
    name: "webbrain",
    last: "Academy",
    get fullName() {
      console.log(this.name, this.last);
    },
    set fullName(value) {
      this.name = value.name;
      this.last = value.last;
      console.log((this.name, this.last));
    },
  };

  user.fullName = {name:'Ali', last:'Valiyev'}
  user.fullName
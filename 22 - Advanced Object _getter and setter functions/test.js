const user = {
    name:'wba',
    last:'aca',
   get fullName(){
        console.log(this.name, this.last)
    },
    set fullName(value){
    this.name = value.name;
    this.last = value.last;
    }
}


user.fullName = {name:'www', last:'aaa'}

user.fullName
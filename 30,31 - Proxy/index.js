let user = {
    name: 'Mata',
    _stir: 1234
}

let proxy = new Proxy(user, {
    get(target, prop){
        if(prop.startsWith("_")) return `access for ${prop} is denied`
        return target[prop];
    }
})

proxy.title = 'mata'

console.log(proxy.name);
console.log(proxy);
// class Animals  {
//     speed(speed){
//         console.log(`Runs ${speed} km per hour`);
//     }
// }
// class Rabbit extends Animals{
//     info(name){
//         console.log(`Quyon .......`)
//     }
// }
// class Wolf extends Animals{
//     info(name){
//         console.log(`Bo'ri .......`)
//     }
// }

// let rb = new Rabbit();
// let wf = new Wolf();

// rb.info();
// rb.speed(10);
// console.log('==================')
// wf.info();
// wf.speed(20);


class Animals  {
    constructor(name){
        this.name = name
    }
    speed(speed){
        console.log(` ${this.name} runs ${speed} km per hour`);
    }
}

let rabbit = new Animals('Rabbit');
rabbit.speed(12);
let wolf = new Animals('Wolf');
wolf.speed(10);
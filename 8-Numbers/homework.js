// No1. Istalgan sonni binary ko'rinishga o'tkazib nechta nol va nechta bir borligini aniqlang.
// chiqish
// 5 => 101
// 2ta bir 1 ta nol qatnashgan

// let a = 5;
// let binaryA = Number(a.toString('2'));
// console.log(binaryA);

// No2. Berilgan sonlar ichidan eng katta va eng kichik sonlar ayirmasini toping.

// let result = Math.max(15, 42, 22, 12, 56, 33 , 44) - Math.min(15, 42, 22, 12, 56, 33 , 44);
// console.log(result);

//randomInteger(min, max) funksiya yozilsin bizga min va max sonlar orasidagi ixtiyoriy son chiqarsin.

function randomInteger(min, max) {
    let a = min + 1;
    while(a < max){
        console.log(a);
        a++
    }
}
console.log(randomInteger(12, 23));
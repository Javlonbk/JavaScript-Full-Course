// No1 - check(str1, str2) - function yozsin. berilgan satrlar bir-biriga  mos yoki mos emasligi va qisman to'g'ri ekanligini ifodalovchi dastur tuzing.

// function check(str1, str2) {
//    let res = str1.localeCompare(str2);
//    if(res === 0) return 'mos'
//    else return 'mos emas'
// }

// console.log(check('hello', 'hello'))

// No2 - getCount(str) function yozilsin. function str dagi harflarni sanog'i bilan birga chiqarib bersin.
// ex: str = 'hello world' {h:1, e:2.......}
// 



// No3 - truncate(str, n) - function yozilsin. Berilgan stringdan n tasini harf ajarib chiqarib bersin.
// ex: str = 'helloworld', n = 5;
// res: 'hello';
// function truncate(str, n) {
//     let result = str.substr(0,n);   
//     console.log(result);
// }
// truncate('helloworld', 5)


// No4 - getCurrency(str) - berilgan pul birligini faqat raqamlarini chiqarib bersin.
// ex: str = '$120' res: 120
function getCurrency(str){
    let result = Number(str.substr(1-str.length));
    console.log( result);
}
getCurrency('$120')

// No5 - berilgan string ichidan raqam, string va characterlarni alohida hisoblab chiqaruvchi dastur tuzing.???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// ex: 'hello@2023!n_1' res:{letter:6, char:3, number:5};
// let str = 'hello@2023!n_1';
// let char = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/`;
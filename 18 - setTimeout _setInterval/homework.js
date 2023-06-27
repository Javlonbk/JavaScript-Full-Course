// Homework: write function sum that would work this:
// sum(1)(2) => 3
// sum(1)(2)(3) => 6
// sum(0)(2)(3)(4) => 9

function sum(a) {
    let total = a;
  
    function addNext(b) {
      total += b;
      return addNext;
    }
  
    addNext.toString = function () {
      return total;
    };
  
    addNext.valueOf = function () {
      return total;
    };
  
    return addNext;
  }
  
  console.log(sum(1)(2)(3));           // Output: 6
  console.log(sum(1)(2)(3)(5));        // Output: 11
  console.log(sum(1)(2)(3)(5)(10));    // Output: 21

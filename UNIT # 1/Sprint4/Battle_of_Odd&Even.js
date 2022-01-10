var a = [1,2,3,4];
function odd(el,i) {
    if (i%2 == 0) {
        return el;
    }
}
var odd1 = a.filter(odd);
// console.log(odd1);


function even(el,i) {
    if (i%2 !== 0) {
        return el;
    }
}
var even1 = a.filter(even);
// console.log(even1);


function sum(a,even1) {
    return a + even1 
}
var sum1 = even1.reduce(sum);
console.log(sum1);

function odd(a,odd1) {
    return a + odd1 
}
var sum2 = odd1.reduce(sum);
console.log(sum2);
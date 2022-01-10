// var a = [2, 4, 5, 3, 6, 8];
// function even(el,i) {
//     if (i%2==0) {
//         return el;
//     }
// }
// var evenn = a.filter(even)
// function evenel(el) {
//     if (el%2==0) {
//         return el;
//     }
// }
// var e = evenn.filter(evenel)
// console.log(e);

var a = ["A", "Good", "Problem"];
function isodd(el) {
    if (el.length%2!==0) {
        return el
    }
}
var i = a.filter(isodd)
var sum = 0;
function len(i) {
    sum = sum+i.length;
    return sum
}
var f = i.reduce(len)
console.log(f);
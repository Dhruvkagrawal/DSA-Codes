// var a = 5;
// arr = [];
// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < a; j++) {
//         arr.push(a[i][j]);
//     }
// }
// console.log(arr);
a = 5;
for (let i = 0; i < a; i++) {
    arr = [];
    if (i % 2 === 0) {
        for (let j = 0; j < a; j++) {
            arr.push(j);
        }
    } else if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);
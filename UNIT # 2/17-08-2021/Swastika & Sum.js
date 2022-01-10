// var a = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [6, 71, 8, 91, 10],
//   [61, 71, 81, 91, 100],
// ];
// arr1 = [];
// arr2 = [];
// for (let i = 0; i <= 0; i++) {
//   for (let j = 0; j < a.length; j++) {
//     if (j < Math.ceil(a.length / 2)) {
//       console.log(a[j][i]);
//     } else if (j === Math.ceil(a.length / 2)) {
//       console.log(a[j][i]);
//     }
//   }
// }

var a = "fun&!! time";
a = a.split(" ");
long = a[0];
for (let i = 0; i < a.length; i++) {
  if (long.length < a[i].length) {
    long = a[i];
  }
}
console.log(long);

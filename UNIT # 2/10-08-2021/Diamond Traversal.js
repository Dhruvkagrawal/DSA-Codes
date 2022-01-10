var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
arr = [];
for (let i = a.length - 1; i >= 0; i--) {
  for (let j = a.length - 1; j >= 0; j--) {
    console.log(i + " " + j);
  }
}
// if (i + j == a.length || i + j == 1) {
//   console.log(a[j][i]);
// }

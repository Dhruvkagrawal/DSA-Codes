// var a = [2, 3, 6, 10];
// max = a[0];
// for (let i = 1; i < a.length; i++) {
//   if (max < a[i]) {
//     max = a[i];
//   }
// }
// arr = [];

var a = [3, 5, 0, 9, 8];
n = a.length;
function solve(a, n) {
  if (n === 1) {
    return;
  }
  for (let i = 0; i < n; i++) {
    if (a[i] > a[i + 1]) {
      [a[i], a[i + 1]] = [a[i + 1], a[i]];
    }
    solve(a, n - 1);
  }
}
console.log(solve(a, n));

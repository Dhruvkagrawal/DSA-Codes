var a = 2;
var b = 10;
var b1 = Math.floor(b / 2);
function solve(a, b1) {
  if (b1 === 1) {
    return a;
  }
  ans = a * solve(a, b1 - 1);
  return ans;
}
if (b % 2 === 0) {
  console.log(solve(a, b1) ** 2);
} else {
  console.log(solve(a, b1) ** 2 * a);
}

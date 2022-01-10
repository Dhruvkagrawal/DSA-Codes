var a = [3, 5, 1, 6, 8];
sum1 = 0;
function sum(a) {
  if (a[a.length + 1] === 0) {
    sum1 = a[a.length];
    return sum1;
  }
  sum1 = Math.abs(sum(a[0]) - sum(a[0 + 1]));
  return sum1;
}
console.log(sum(a));

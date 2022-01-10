var a = 6;
function fibonaci(a) {
  if (a === 0) {
    return 0;
  }
  if (a === 1) {
    return 1;
  }
  ans = fibonaci(a - 1) + fibonaci(a - 2);
  return ans;
}
console.log(fibonaci(a));

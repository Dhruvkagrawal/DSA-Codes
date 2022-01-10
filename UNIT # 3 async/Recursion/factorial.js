var a = 6;
function factorial(a) {
  if (a === 1) {
    return 1;
  }
  ans = a * factorial(a - 1);
  return ans;
}
console.log(factorial(a));

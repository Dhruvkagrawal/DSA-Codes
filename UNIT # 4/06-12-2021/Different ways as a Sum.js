var a = 5;
function solve(a) {
  count = 0;
  if (a < 0) {
    return;
  }
  if (a === 0) {
    count = count + 1;
    return count;
  }
  return solve(a - 1) + solve(a - 3) + solve(a - 4);
}
console.log(solve(a));

var a = 4;
count = 0;
function solve(a, count) {
  if (a == 0) {
    return;
  }
  count++;
  return solve(a - 1, count) + solve(a - 2, count) + solve(a - 5, count);
}
console.log(solve(a, count));

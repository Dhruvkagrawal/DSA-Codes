var a = 4;
function solve(a) {
  if (a < 0) {
    return 0;
  }
  if (a === 0) {
    return 1;
  }
  return solve(a - 1) + solve(a - 2) + solve(a - 3);
}
console.log(solve(a));

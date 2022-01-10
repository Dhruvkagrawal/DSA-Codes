function solve(a) {
  if (a === 0) {
    return 1;
  } else if (a < 0) {
    return;
  }
  return solve(a - 1) + solve(a - 3) + solve(a - 4);
}
var a = 5;

console.log(solve(a));

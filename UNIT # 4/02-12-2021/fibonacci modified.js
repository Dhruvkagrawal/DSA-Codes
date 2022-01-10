var a = 5;
ans = [0, 1];
for (let i = 2; i < a + 1; i++) {
  ans.push(-1);
}
function solve(a, ans) {
  if (ans[a] !== -1) {
    return ans[a];
  } else {
    ans[a] = solve(a - 1, ans) + solve(a - 2, ans);
  }
  return ans[a];
}
console.log(solve(a, ans));

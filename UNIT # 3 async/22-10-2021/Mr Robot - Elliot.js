function solve(a, i, j, ans) {
  if (i > j) {
    return ans;
  }
  let mid = (i + j) / 2;
  ans =
    ans + a.charAt(mid) + solve(a, i, mid - 1, ans) + solve(a, mid + 1, j, ans);
  return ans;
}
function main() {
  a = "abcd";
  result = solve(a, 0, a.length - 1, "");
  console.log(result);
}
main();

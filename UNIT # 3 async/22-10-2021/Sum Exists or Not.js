var a = [1, 2, 3, 4];
k = 3;
b = [];
flag = false;
sum = 0;
cur = 0;
function gs(a, b, cur) {
  if (b.length >= 0) {
    console.log(solve(b, k, 0, 0));
  }
  if (cur == a.length) {
    return;
  }
  for (let i = cur; i < a.length; i++) {
    b.push(a[i]);
    gs(a, b, i + 1);
    b.pop(b.length - 1);
  }
}
gs(a, b, cur);
function solve(a, k, sum, cur) {
  // console.log(sum);
  if (sum == k) {
    flag = true;
    return;
  }
  if (cur === a.length) {
    return;
  }
  for (let i = 0; i < a.length; i++) {
    solve(a, k, sum + a[i], i + 1);
    solve(a, k, sum, i + 1);
  }
  return flag;
}
// console.log(solve(a, k, 0, 0));

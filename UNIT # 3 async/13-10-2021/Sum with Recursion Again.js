a = [3, 5, 1, 6, 8];
ans = 0;
function sum(a) {
  for (let i = 0; i < a.length; i++) {
    ans = ans + (a[i] + a[i + 1]);
  }
  console.log(ans);
}
sum(a);

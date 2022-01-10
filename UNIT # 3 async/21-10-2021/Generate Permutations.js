var a = [1, 2, 3];
function permu(a, cur) {
  if (cur == a.length) {
    console.log(a);
    return;
  }
  for (let i = cur; i < a.length; i++) {
    [i, cur] = [cur, i];
    permu(a, cur + 1);
    [i, cur] = [cur, i];
  }
}
permu(a, 0);

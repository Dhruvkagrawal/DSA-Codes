a = [6, 4, 21, 20, 13];
b = [];
var key = 24;
var c = 3;
cur = 0;
function gs(a, b, cur, c) {
  if (b.length >= 0) {
    console.log(b.join(" "));
  }
  if (cur == a.length) {
    return;
  }
  for (let i = cur; i < a.length; i++) {
    b.push(a[i]);
    gs(a, b, i + 1, c);
    b.pop(b.length - 1);
  }
}
gs(a, b, cur, c);

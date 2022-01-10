// var a = "abcd";
// ans = "";
// function sequence(a, ans) {
//   console.log(ans);
//   if (a.length == 0) {
//     return;
//   }
//   sequence(a.substring(1), ans + a[0]);
//   sequence(a.substring(1), ans);
// }
// sequence(a, ans);

var a = 3;
var b = 4;
ans = 1;
for (let i = 0; i < b; i++) {
  ans = ans * a;
}
console.log(ans);

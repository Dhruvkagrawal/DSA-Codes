// var str = "abcd";
// ans = "";
// function solve(str, ans) {
//   if (str.length == 0) {
//     console.log(ans);
//     return;
//   }
//   solve(str.substring(1), ans + str[0]);
//   solve(str.substring(1), ans);
// }
// solve(str, ans);

var str = "abcd";
ans = [];
var i = 0;
function solve(str, ans, i) {
  if (str.length === i) {
    console.log(ans.join(""));
    return;
  }
  solve(str.substring(1), ans.push(str[0]), i);
  solve(str.substring(1), ans, i);
}
solve(str, ans, i);

// var a = [1, 2, 3, 7, 9];
// i = 1;
// function sort(a, i) {
//   if (i >= a.length) {
//     console.log("true");
//     return;
//   }
//   if (a[i] < a[i - 1]) {
//     console.log("false");
//     return;
//   }
//   sort(a, i + 1);
// }
// sort(a, i);

var a = [1, 2, 3, 7, 9];
i = 1;
function sort(a, i) {
  if (i >= a.length) {
    flag = "true";
    return flag;
  }
  if (a[i] < a[i - 1]) {
    flag = "false";
    return flag;
  }
  sort(a, i + 1);
}
console.log(sort(a, i));

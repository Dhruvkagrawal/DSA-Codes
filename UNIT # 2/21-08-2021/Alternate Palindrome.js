// var a = "abbb";
// for (let i = 0; i < a.length; i++) {
//   str = "";
//   for (let j = 0; j < a.length; j++) {
//     str = str + a[i];
//   }
// }
var s = "abbb";
for (var i = 0; i < s.length; i++) {
  str = " ";
  for (var j = 2; j < s.length; j++) {
    str = str + s[j];
    console.log(str);
  }
  // console.log(str);
}

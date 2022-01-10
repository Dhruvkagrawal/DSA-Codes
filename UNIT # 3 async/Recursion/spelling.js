// var a = "413";
// ans = [];
// for (let i = 0; i < a.length; i++) {
//   switch (a[i]) {
//     case "0":
//       ans.push("zero");
//       break;
//     case "1":
//       ans.push("one");
//       break;
//     case "2":
//       ans.push("two");
//       break;
//     case "3":
//       ans.push("three");
//       break;
//     case "4":
//       ans.push("four");
//       break;
//     case "5":
//       ans.push("five");
//       break;
//     case "6":
//       ans.push("six");
//       break;
//     case "7":
//       ans.push("seven");
//       break;
//     case "8":
//       ans.push("eight");
//       break;
//     case "9":
//       ans.push("nine");
//       break;
//   }
// }
// console.log(ans.join(" "));

// var a = 589;
// a = a.toString();
// // console.log(a);
// ans = [];
// b = 0;
// function solve(a, ans, b) {
//   if (a.length < b) {
//     return;
//   }
//   switch (a[b]) {
//     case "0":
//       ans.push("zero");
//       break;
//     case "1":
//       ans.push("one");
//       break;
//     case "2":
//       ans.push("two");
//       break;
//     case "3":
//       ans.push("three");
//       break;
//     case "4":
//       ans.push("four");
//       break;
//     case "5":
//       ans.push("five");
//       break;
//     case "6":
//       ans.push("six");
//       break;
//     case "7":
//       ans.push("seven");
//       break;
//     case "8":
//       ans.push("eight");
//       break;
//     case "9":
//       ans.push("nine");
//       break;
//   }
//   solve(a, ans, b + 1);
//   return ans;
// }
// console.log(solve(a, ans, b).join(" "));

var a = 432;
ans = [];
str = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
function solve(a, ans, str) {
  if (a === 0) {
    return;
  }
  //   a = a / 10;
  solve(Math.floor(a / 10), ans, str);
  a1 = a % 10;
  ans.push(str[a1]);
  return ans;
}
w = solve(a, ans, str).join(" ");
console.log(w);

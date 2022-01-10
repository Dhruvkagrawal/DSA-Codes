// var a = 36;
// var after = 0;

// function solve(after, a) {
//   if (a <= 7) {
//     return a;
//   } else {
//     var after = Math.floor(a / 2) + Math.floor(a / 3) + Math.floor(a / 4);
//     return solve(after, a);
//   }
// }
// console.log(solve(after, a));

var a = 504;
var ans = a;
var max = 0;
for (let i = 0; i <= 1; i++) {
  max = Math.max(Math.floor(a / 2) + Math.floor(a / 3) + Math.floor(a / 4));
  console.log(max);
  if (ans < max) {
    ans = max;
  }
}
console.log(ans);

// function runProgram(input) {
//   let n = input.trim().split("\n");
//   line = 0;
//   for (let i = 0; i < n.length; i++) {
//     var a = +n[line++];
//     var ans = a;
//     var max = 0;
//     for (let i = 0; i <= 5; i++) {
//       max = Math.floor(a / 2) + Math.floor(a / 3) + Math.floor(a / 4);
//       if (ans < max) {
//         ans = max;
//       }
//     }
//     console.log(ans);
//   }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`12
//   2`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

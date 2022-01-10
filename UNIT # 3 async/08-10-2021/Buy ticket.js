var E = 1;
var D = 2;
var a = [[E, 2], [D], [D], [E, 3], [D]];
var queue = [];
for (let i = 0; i < a.length; i++) {
  if (a[i][0] === 1) {
    queue.push(a[i][1]);
    console.log(queue.length);
  } else if (a[i][0] === 2 && queue.length !== 0) {
    console.log(queue.shift() + " " + queue.length);
  } else if (a[i][0] === 2 && queue.length === 0) {
    console.log("-1" + " " + queue.length);
  }
}
console.log(queue);
// function runProgram(input) {
//   n = input.trim().split("\n");
//   t = +n[0];
//   a = [];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     a1 = n[line++].trim().split(" ");
//     a.push(a1);
//   }
//   var queue = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i][0] === "E") {
//       queue.push(a[i][1]);
//       console.log(queue.length);
//     } else if (a[i][0] === "D" && queue.length !== 0) {
//       console.log(queue.shift() + " " + queue.length);
//       queue.shift();
//     } else if (a[i][0] === "D" && queue.length === 0) {
//       console.log("-1" + " " + queue.length);
//     }
//   }
// }
// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`5
//   E 2
//   D
//   D
//   E 3
//   D`);
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

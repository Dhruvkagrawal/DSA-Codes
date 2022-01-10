count = 0;
if (a % 4 === 0) {
  count++;
} else if (a % 8 === 0) {
  count++;
} else {
  r = a % 8;
  console.log(r);
}

// function runProgram(input) {
//   n = input.trim().split("\n");
//   t = +n[0];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     count = 1;
//     a = +n[line];
//     if (a % 8 === 0) {
//       console.log(a / 8);
//     } else if (a % 4 === 0) {
//       console.log(a / 4);
//     } else if (a % 4 !== 0 && a % 8 !== 0) {
//       t = a / 8;
//       a1 = a - t * 8;
//       t = a1 / 4 + t;
//     }
//   }
//   console.log(Math.trunc(t));
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`1
//   50`);
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

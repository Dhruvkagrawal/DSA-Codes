var a = [1, 5];
var b = [3];
var max = a[0];
var min = b[0];
for (let i = 0; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  }
}
if (b.length === 2) {
  for (let i = 0; i < b.length; i++) {
    if (min > b[i]) {
      min = b[i];
    }
  }
} else if (b.length === 1) {
  min = 0;
}
var ans = max * min;
console.log(ans);

// function runProgram(input) {
//   n = input.trim().split("\n");
//   var t = +n[0];
//   line = 1;
//   for (let i = 0; i < t; i++) {
//     a = n[line].trim().split(" ").map(Number);
//     line++;
//     b = n[line].trim().split(" ").map(Number);
//     line++;
//     var max = a[0];
//     var min = b[0];
//     for (let i = 0; i < a.length; i++) {
//       if (max < a[i]) {
//         max = a[i];
//       }
//     }
//     if (b.length === 2) {
//       for (let i = 0; i < b.length; i++) {
//         if (min > b[i]) {
//           min = b[i];
//         }
//       }
//     } else if (b.length === 1) {
//       min = 0;
//     }
//     var ans = max * min;
//     console.log(ans);
//   }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`2
//   2 4
//   2 1
//   1 5
//   3`);
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

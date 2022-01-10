var a = [2,2,2,3,3]
var even_sum = 0;
var odd_sum = 0;
for (var i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    even_sum = even_sum + a[i]
  } else if (a[i] % 2 !== 0) {
    odd_sum = odd_sum + a[i]
  }
}
if (even_sum >= odd_sum) {
  console.log("Even");
} else {
  console.log("Odd");
}

// function runProgram(input) {
//   var index = input.split("\n");
//   a = index[1].split(" ").map(Number);
//   var even_sum = 0;
//   var odd_sum = 0;
//   for (var i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//       even_sum = even_sum + a[i]
//     } else if (a[i] % 2 !== 0) {
//       odd_sum = odd_sum + a[i]
//     }
//   }
//   if (even_sum > odd_sum) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
//   runProgram(`4\n1 2 3 4`);
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
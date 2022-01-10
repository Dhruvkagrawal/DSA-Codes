// var a = [1, 2, 3, 4, 5];
// even = 0;
// odd = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     even = even + a[i];
//   } else {
//     odd = odd + a[i];
//   }
// }
// ans = 2 * even + 3 * odd;
// console.log(ans);

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  even = 0;
  odd = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      even = even + a[i];
    } else {
      odd = odd + a[i];
    }
  }
  ans = 2 * even + 3 * odd;
  console.log(ans);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  1 2 3 4 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

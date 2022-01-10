// var a = [2, 5, 4, 4, 4];
// count = 0;
// for (let i = 0; i <= a.length; i++) {
//   sum = 0;
//   for (let j = i; j <= a.length; j++) {
//     sum = sum + a[j];
//     if (sum % 2 === 0) {
//       count++;
//     }
//   }
// }
// console.log(count);

function runProgram(input) {
  n = input.trim().split("\n");
  var l = +n[0];
  var a = n[1].trim().split(" ").map(Number);
  count = 0;
  for (let i = 0; i <= a.length; i++) {
    sum = 0;
    for (let j = i; j <= a.length; j++) {
      sum = sum + a[j];
      if (sum % 2 === 0) {
        count++;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  2 5 4 4 4`);
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

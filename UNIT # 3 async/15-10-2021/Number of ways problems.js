// var a = 4;
// count = 0;
// function ways(a) {
//   if (a < 0) {
//     return 0;
//   }
//   if (a == 0) {
//     count++;
//     return 1;
//   }
//   return ways(a - 1) + ways(a - 2) + ways(a - 3);
// }
// console.log(ways(a));

function runProgram(input) {
  a = input.trim();
  count = 0;
  function ways(a) {
    if (a < 0) {
      return 0;
    }
    if (a == 0) {
      count++;
      return 1;
    }
    return ways(a - 1) + ways(a - 2) + ways(a - 3);
  }
  console.log(ways(a));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4`);
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

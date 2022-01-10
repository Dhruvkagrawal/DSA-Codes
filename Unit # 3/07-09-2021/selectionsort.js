// var a = [3, 0, 6, 342, 1.56, 76, 323, 133, 5657, 67568, 3536, 65, 78.34, 56];
// for (let i = 0; i < a.length - 1; i++) {
//   min = i;
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[min] > a[j]) {
//       min = j;
//     }
//   }
//   [a[i], a[min]] = [a[min], a[i]];
// }
// console.log(a.join(" "));

function runProgram(input) {
  n = input.trim().split("\n");
  var a = n[1].trim().split(" ").map(Number);
  for (let i = 0; i < a.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    [a[i], a[min]] = [a[min], a[i]];
  }
  console.log(a.join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  3 5 0 9 8`);
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

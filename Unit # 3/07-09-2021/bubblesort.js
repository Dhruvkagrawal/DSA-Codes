// var a = [3, 1, 6, 342, 1.56, 76, 323, 133, 5657, 67568, 3536, 65, 78.34, 56];
// for (let i = 0; i < a.length - 1; i++) {
//   swap = false;
//   for (let j = 0; j < a.length - i; j++) {
//     if (a[j] > a[j + 1]) {
//       [a[j], a[j + 1]] = [a[j + 1], a[j]];
//       swap = true;
//     }
//   }
//   if (swap === false) {
//     break;
//   }
// }
// console.log(a);

function runProgram(input) {
  n = input.trim().split("\n");
  var a = n[1].trim().split(" ").map(Number);
  for (let i = 0; i < a.length - 1; i++) {
    swap = false;
    for (let j = 0; j < a.length - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swap = true;
      }
    }
    if (swap === false) {
      break;
    }
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

// var a = [
//   [1, 0],
//   [0, 1],
//   [1, 1],
// ];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     if (a[i][j] === 0) {
//       a[i][j] = 1;
//     } else if (a[i][j] === 1) {
//       a[i][j] = 0;
//     }
//   }
//   console.log(a[i].join(" "));
// }

function runProgram(input) {
  n = input.trim().split("\n");
  nm = n[0].trim().split(" ").map(Number);
  r = +nm[0];
  line = 1;
  a = [];
  for (let i = 0; i < r; i++) {
    a1 = n[line++].trim().split(" ").map(Number);
    a.push(a1);
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === 0) {
        a[i][j] = 1;
      } else if (a[i][j] === 1) {
        a[i][j] = 0;
      }
    }
    console.log(a[i].join(" "));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3 2
  1 0
  0 1
  1 1`);
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

// var a = 4;
// count = 0;
// for (let i = 2; i < a - 1; i++) {
//   if (a % i === 0) {
//     count++;
//   }
// }

// var a = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// b = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a.length; j++) {
//     b.push(a[i][j]);
//   }
// }
// ans = [];
// for (let i = 0; i < b.length; i++) {
//   count = 0;
//   for (let j = 2; j < b[i] - 1; j++) {
//     if (b[i] % j === 0) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     ans.push(b[i]);
//   }
// }
// console.log(ans.length);

function runProgram(input) {
  n = input.trim().split("\n");
  nm = n[0].trim().split(" ").map(Number);
  N = +nm[0];
  line = 1;
  a = [];
  for (let i = 0; i < N; i++) {
    a1 = n[line++].trim().split(" ").map(Number);
    a.push(a1);
  }
  b = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      b.push(a[i][j]);
    }
  }
  ans = [];
  for (let i = 0; i < b.length; i++) {
    count = 0;
    for (let j = 2; j < b[i] - 1; j++) {
      if (b[i] % j === 0) {
        count++;
      }
    }
    if (count > 0) {
      ans.push(b[i]);
    }
  }
  ans.push(1);
  console.log(ans);
  console.log(ans.length);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9`);
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

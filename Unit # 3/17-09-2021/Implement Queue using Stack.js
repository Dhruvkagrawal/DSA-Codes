// var a = [[0, 1], [0, 2], [0, 3], [1], [2], [1]];
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i][0] === 0) {
//     arr.push(a[i][1]);
//   }
// }
// ans = arr.reverse();
// // console.log(ans);
// for (let i = 0; i < a.length; i++) {
//   if (a[i][0] === 1) {
//     console.log(arr[0]);
//   } else if (a[i][0] === 2) {
//     arr.shift();
//   }
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  a = [];
  line = 1;
  for (let i = 0; i < t; i++) {
    at = n[line++].trim().split(" ").map(Number);
    a.push(at);
  }
  arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === 0) {
      arr.push(a[i][1]);
    }
  }
  ans = arr.reverse();
  // console.log(ans);
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === 1) {
      console.log(arr[0]);
    } else if (a[i][0] === 2) {
      arr.shift();
    }
  }
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`7
  0 29
  0 33
  0 2
  1
  2
  1
  2`);
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

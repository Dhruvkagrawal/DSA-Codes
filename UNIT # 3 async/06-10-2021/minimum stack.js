// var a = [
//   ["push", 5],
//   ["push", 3],
//   ["push", 1],
//   ["getMin"],
//   ["pop"],
//   ["getMin"],
//   ["pop"],
//   ["getMin"],
// ];
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i][0] === "push") {
//     arr.push(a[i][1]);
//   } else if (a[i][0] === "getMin") {
//     console.log(arr[arr.length - 1]);
//   } else if (a[i][0] === "pop") {
//     arr.pop();
//   }
// }

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  a = [];
  line = 1;
  for (let i = 0; i < t; i++) {
    a1 = n[line++].trim().split(" ");
    a.push(a1);
  }
  arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === "push") {
      arr.push(a[i][1]);
    } else if (a[i][0] === "getMin" && arr.length !== 0) {
      min = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
          min = arr[i];
        }
      }
      console.log(min);
    } else if (a[i][0] === "pop" && arr.length !== 0) {
      arr.pop();
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`8
  push 5
  push 3
  push 1
  getMin
  pop
  getMin
  pop
  getMin`);
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

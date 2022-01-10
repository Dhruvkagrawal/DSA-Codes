// var a = [[1, 15], [1, 20], [2], [3], [2], [3]];
// var max = 6;
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   if (a[i].length === 2) {
//     arr.push(a[i][1]);
//   }
//   if (a[i][0] === 2) {
//     arr.pop();
//   }
//   if (a[i][0] === 3) {
//     if (arr.length === 0) {
//       console.log("Empty!");
//     } else {
//       console.log(arr.join(" "));
//     }
//   }
// }

function runProgram(input) {
  n = input.trim().split("\n");
  line = 1;
  a = [];
  for (let i = 0; i < n.length - 1; i++) {
    a.push(n[line].trim().split(" ").map(Number));
    line++;
  }
  //   console.log(a);
  arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].length === 2) {
      arr.push(a[i][1]);
    }
    if (a[i][0] === 2) {
      arr.pop();
    }
    if (a[i][0] === 3) {
      if (arr.length === 0) {
        console.log("Empty!");
      } else {
        console.log(arr[arr.length - 1]);
      }
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`7
  1 23
  1 43
  1 75
  2
  3
  2
  3`);
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

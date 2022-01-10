// var a = [2, 3, 5, 8, 3];
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] < a[j]) {
//       if (a[j] % 2 === 0) {
//         console.log(a[i]);
//       }
//       break;
//     }
//   }
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  a = [];
  for (let i = 0; i < t; i++) {
    var r = +n[line++];
    var a = n[line++].trim().split(" ").map(Number);
    arr = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
          if (a[j] % 2 === 0) {
            arr.push(a[i]);
          }
          break;
        }
      }
    }
  }
  if (arr.length === 0) {
    console.log("-1");
  } else {
    max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    console.log(max);
  }
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
    5
    2 8 5 9 50`);
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

// var a = [1, 3, 2, 4];
// let j;
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     console.log(a[i] + "   " + a[j]);
//     if (a[i] < a[j]) {
//       console.log(a[j]);
//       break;
//     }
//   }
//   if (j) {
//     console.log(-1);
//   }
// }
// console.log(-1);

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    var r = +n[line++];
    var a = n[line++].trim().split(" ").map(Number);
    arr = [];
    for (let i = 0; i < a.length; i++) {
      k = -1;
      for (let j = i + 1; j < a.length; j++) {
        //   console.log(a[i] + "   " + a[j]);
        if (a[i] < a[j]) {
          arr.push(a[j]);
          break;
        } else if (j == a.length + 1) {
          arr.push(-1);
        }
      }
    }
    arr.push(-1);
    console.log(arr.join(" "));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`10
  15
  2 7 10 2 3 17 15 9 3 14 6 6 10 4 12
  8
  1 1 1 2 2 1 2 2
  12
  8 10 12 16 9 11 13 2 10 12 15 10
  4
  3 3 2 3
  3
  8 12 3
  9
  13 5 15 16 10 9 11 10 13
  2
  9 9
  7
  9 8 2 5 1 6 4
  10
  3 10 2 9 2 2 2 5 8 9
  14
  2 3 6 7 8 1 7 5 5 3 2 5 3 3`);
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

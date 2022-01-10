// var a = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 1],
//   [2, 3, 4, 5, 6],
//   [7, 8, 9, 1, 2],
//   [3, 4, 5, 6, 7],
// ];
// sum = 0;
// // arr = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < a[i].length; j++) {
//     if ((i === j) | (i + j === a.length - 1)) {
//       // arr.push(a[i][j]);
//       sum = sum + a[i][j];
//     } else if (
//       i === 0 ||
//       j === 0 ||
//       i === a.length - 1 ||
//       j === a[i].length - 1
//     ) {
//       // arr.push(a[i][j]);
//       sum = sum + a[i][j];
//     }
//   }
// }
// // console.log(arr);
// console.log(sum);

function runProgram(input) {
  n = input.trim().split("\n");
  var l = +n[0];
  line = 1;
  a = [];
  for (let i = 0; i < l; i++) {
    sub = n[line].trim().split(" ").map(Number);
    a.push(sub);
    line++;
  }
  sum = 0;
  // arr = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if ((i === j) | (i + j === a.length - 1)) {
        // arr.push(a[i][j]);
        sum = sum + a[i][j];
      } else if (
        i === 0 ||
        j === 0 ||
        i === a.length - 1 ||
        j === a[i].length - 1
      ) {
        // arr.push(a[i][j]);
        sum = sum + a[i][j];
      }
    }
  }
  // console.log(arr);
  console.log(sum);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  1 2 3 4 5
  6 7 8 9 1
  2 3 4 5 6
  7 8 9 1 2
  3 4 5 6 7`);
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

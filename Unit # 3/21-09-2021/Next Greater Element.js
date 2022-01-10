// var a = [1, 8, 3, 5, 2, 4];
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] < a[j]) {
//       arr.push(a[j]);
//       break;
//     }
//     if (j == a.length - 1) {
//       arr.push(-1);
//     }
//   }
// }
// arr.push(-1);
// console.log(arr);

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    l = +n[line++];
    a = n[line++].trim().split(" ").map(Number);
    arr = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
          arr.push(a[j]);
          break;
        }
        if (j == a.length - 1) {
          arr.push(-1);
        }
      }
    }
    arr.push(-1);
    console.log(arr.join(" "));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
  4
  1 3 2 4`);
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

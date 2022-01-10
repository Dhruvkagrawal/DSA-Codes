// var a = [2, 2, 2, 3, 5, 5, 6, 8, 9];
// var b = [9, 8, 7, 6, 5, 3, 2, 2, 2];
// arr = [];
// l = 0;
// r = b.length - 1;
// while (l < a.length) {
//   if (a[l] === b[r]) {
//     arr.push(a[l]);
//     b.pop();
//     l++;
//     r--;
//   } else if (a[l] < a[r]) {
//     l++;
//   } else {
//     l++;
//     r--;
//   }
// }
// console.log(arr);

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    g = +n[line++];
    a = n[line++].trim().split(" ").map(Number);
    b = n[line++].trim().split(" ").map(Number);
    arr = [];
    l = 0;
    r = b.length - 1;
    while (l < a.length) {
      if (a[l] === b[r]) {
        arr.push(a[l]);
        b.pop();
        l++;
        r--;
      } else if (a[l] < a[r]) {
        l++;
      } else {
        l++;
        r--;
      }
    }
    console.log(arr.length);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  8
  1 2 3 5 8 8 9 9
  8 8 6 5 3 2 1 1
  9
  2 3 3 3 7 7 9 9 9
  9 9 9 8 6 5 4 3 1
  2
  4 7
  4 2
  3
  3 7 7
  8 5 1
  4
  2 7 7 8
  9 7 6 3`);
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

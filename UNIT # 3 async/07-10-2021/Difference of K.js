// var a = [1, 2, 3, 4, 5];
// k = 3;
// l = 0;
// r = 0;
// count = 0;
// while (r < a.length) {
//   if (a[r] - a[l] === k) {
//     count++;
//     l++;
//     r++;
//   } else if (a[r] - a[l] > k) {
//     l++;
//   } else {
//     r++;
//   }
// }
// if (count === 0) {
//   console.log("No");
// } else {
//   console.log("Yes");
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    var ld = n[line++].trim().split(" ").map(Number);
    var k = +ld[1];
    var a = n[line++].trim().split(" ").map(Number);
    l = 0;
    r = 0;
    count = 0;
    while (r < a.length) {
      if (a[r] - a[l] === k) {
        count++;
        l++;
        r++;
      } else if (a[r] - a[l] > k) {
        l++;
      } else {
        r++;
      }
    }
    if (count === 0) {
      console.log("No");
    } else {
      console.log("Yes");
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
    1 5
    3
    6 0
    -8 -7 5 6 6 9
    1 4
    -3
    2 6
    -2 1
    3 3
    -5 -3 0 `);
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

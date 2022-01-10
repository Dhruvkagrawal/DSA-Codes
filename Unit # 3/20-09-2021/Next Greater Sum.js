// var a = [2, 3, 5, 8, 3];
// ans = [];
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] < a[j]) {
//       ans.push(a[i]);
//       break;
//     }
//   }
// }
// sum = 0;
// for (let i = 0; i < ans.length; i++) {
//   sum = sum + ans[i];
// }
// console.log(sum);

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  a = [];
  for (let i = 0; i < t; i++) {
    var r = +n[line++];
    var a = n[line++].trim().split(" ").map(Number);
    ans = [];
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
          ans.push(a[i]);
          break;
        }
      }
    }
    sum = 0;
    for (let i = 0; i < ans.length; i++) {
      sum = sum + ans[i];
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
  5
  2 3 5 8 3`);
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

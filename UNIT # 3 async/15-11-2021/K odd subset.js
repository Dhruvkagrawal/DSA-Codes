// var a = [4, 2, 1, 3, 7];
// ans = [];
// for (let i = 0; i < a.length; i++) {
//   k = -1;
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] > a[j]) {
//       ans.push(a[j]);
//       break;
//     }
//     ans.push(k);
//   }
// }
// count = 0;
// for (let i = 0; i < ans.length; i++) {
//   if (ans[i] === -1) {
//     count++;
//   }
// }
// console.log(count);

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  ans = [];
  for (let i = 0; i < a.length; i++) {
    k = -1;
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        ans.push(a[j]);
        break;
      }
    }
  }
  //   console.log(ans);
  console.log(a.length - ans.length);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  4 2 1 3 7 `);
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

var a = "my name is ankush";
ans = [];
for (let i = 0; i < a.length; i++) {
  for (let j = i; j < a.length; j++) {
    if (a[i] === a[j]) {
      ans.push(a[i]);
      break;
    }
  }
}
console.log(ans);

// function runProgram(input) {
//   var a = String(input);
//   ans = " ";
//   for (let i = 0; i < a.length; i++) {
//     if (ans(a[i]) === false) {
//       ans += a[i];
//     }
//   }
//   console.log(ans);
// }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });

// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });

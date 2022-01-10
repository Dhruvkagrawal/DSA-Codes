// var a = "574674546476";
// var a = a.trim().split("").map(Number);
// var ans = [];
// let c = 0;
// for (let i = a.length - 1; i >= 0; i--) {
//   if (a[i] % 2 === 0 && a[i] !== 0) {
//     c++;
//     ans.push(c);
//   } else {
//     ans.push(c);
//   }
// }
// console.log(ans.reverse().join(" "));

function runProgram(input) {
  var a = input.trim().split("").map(Number);
  //   var a = n.split("").map(Number);
  var ans = [];
  let c = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] % 2 === 0 && a[i] !== 0) {
      c++;
      ans.push(c);
    } else {
      ans.push(c);
    }
  }
  console.log(ans.reverse().join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`574674546476`);
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

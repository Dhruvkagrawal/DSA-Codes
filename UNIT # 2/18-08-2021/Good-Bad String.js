// var a = "ababa";
// var b = "";
// for (let i = 0; i < a.length; i++) {
//   if (a[i] !== a[i + 1]) {
//     b = b + a[i];
//   }
// }
// console.log(b);

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = n[line].trim();
    line++;
    var b = "";
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== a[i + 1]) {
        b = b + a[i];
      }
    }
    console.log(b);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3
  abb
  aaab
  ababa`);
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

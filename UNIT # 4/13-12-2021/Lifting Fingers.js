// count = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] !== a[i + 1]) {
//     count++;
//   }
// }
// console.log(count);

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = n[line++].trim();
    count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== a[i + 1]) {
        count++;
      }
    }
    console.log(count);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  aaaaa
  abbbaaz`);
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

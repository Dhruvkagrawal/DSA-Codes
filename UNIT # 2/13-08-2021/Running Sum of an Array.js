function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let r = 0; r < t; r++) {
    var l = +n[line++];
    var a = n[line++].trim().split(" ").map(Number);
  }
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4
  6
  9 9 1 2 6 7
  7
  4 7 6 9 1 6 3
  7
  2 4 3 1 3 9 1
  4
  2 7 3 9
  `);
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

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let r = 0; r < t; r++) {
    var l = +n[line++];
    var a = n[line++].trim().split(" ").map(Number);
    sum = 0;
    arr = [];
    for (let i = 0; i < a.length; i++) {
      sum = sum + a[i];
      arr.push(sum);
    }
    console.log(arr.join(" "));
  }
}
if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`7
  7
  4 2 4 8 3 2 4
  3
  8 3 4
  1
  5
  7
  5 6 2 2 1 9 2
  3
  8 9 8
  1
  4
  3
  8 5 1
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

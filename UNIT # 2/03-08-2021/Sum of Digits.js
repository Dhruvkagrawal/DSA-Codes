function runProgram(input) {
  n = input.trim().split("\n");
  var t = n[0];
  arr = [];
  line = 1;
  for (let j = 0; j < t; j++) {
    var l = +n[line]
    line++
    var sub = n[line].trim().split(" ").map(Number);
    line++
    a = sub.join(" ").split("").map(Number)
    sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum = sum + a[i]
    }
    console.log(sum);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  5
  12 14 16 17 29
  6
  1 2 3 4 5 51`);
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
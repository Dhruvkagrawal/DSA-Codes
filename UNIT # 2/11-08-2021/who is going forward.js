function runProgram(input) {
  n = input.trim().split("\n");
  var rb = n[0].trim().split(" ").map(Number);
  var b = +rb[1];
  var a = n[1].trim().split(" ").map(Number);
  count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] >= a[b - 1] && a[b - 1] != 0) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4 2
  0 0 0 0
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

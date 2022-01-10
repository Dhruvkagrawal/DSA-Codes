function solve(a, b, t) {
  count = 0;
  for (let i = 0; i < a.length; i++) {
    if (b[i] < a[i + 1]) {
      count++;
    } else if (b[i] !== b[b.length - 1] && count <= t) {
      console.log("Not Possible");
      return;
    }
  }
  console.log("Possible");
}

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  a = n[1].trim().split(" ").map(Number);
  b = n[2].trim().split(" ").map(Number);
  solve(a, b, t);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
  1 3 5
  2 6 8`);
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

function power(a, b) {
  if (b === 1) {
    return a;
  }
  ans = a * power(a, b - 1);
  return ans * ans;
}

function runProgram(input) {
  n = input.trim().split(" ").map(Number);
  a = +n[0];
  b = +n[1] / 2;
  console.log(power(a, b));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2 5`);
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

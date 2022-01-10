// var a = [3, 2, 4, 15];

function solve(a) {
  low = 0;
  high = a[a.length - 1];
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    ans = a[0] * (mid * mid) + a[1] * mid + a[2];
    if (ans >= a[3]) {
      arr = mid;
      high = mid - 1;
    } else {
      if (ans < a[3]) {
        low = mid + 1;
      }
    }
  }
  if (arr === 0) {
    return -1;
  } else {
    return arr;
  }
}

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = n[line++].trim().split(" ").map(Number);
    console.log(solve(a));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
  3 2 4 15`);
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

// var a = [50, 40, 30, 20, 10];
// key = 45;
// low = 0;
// high = a.length - 1;
solve = (a, key, low, high) => {
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (a[mid] == key) {
      return "YES";
    } else {
      if (a[mid] < key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return "NO";
};

function runProgram(input) {
  n = input.trim().split("\n");
  n1 = n[0].trim().split(" ").map(Number);
  t = +n1[1];
  a = n[1].trim().split(" ").map(Number);
  a = a.sort();
  low = 0;
  high = a.length - 1;
  line = 2;
  for (let i = 0; i <= t; i++) {
    key = +n[line++];
    console.log(solve(a, key, low, high));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5 10
  50 40 30 20 10
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100`);
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

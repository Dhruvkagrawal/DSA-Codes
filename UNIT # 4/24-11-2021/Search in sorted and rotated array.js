// var a = [3, 4, 7, 9, 1, 2];
// var key = 6;
function solve(a, key) {
  low = 0;
  high = a.length - 1;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (a[mid] === key) {
      return mid;
    } else {
      if (a[mid] > key) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
}

function runProgram(input) {
  n = input.trim().split("\n");
  r = n[0].trim().split(" ").map(Number);
  key = +r[1];
  a = n[1].trim().split(" ").map(Number);
  console.log(solve(a, key));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`10 -1
  4 6 7 9 10 -1 0 1 2 3`);
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

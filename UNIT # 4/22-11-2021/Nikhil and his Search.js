// var a = [1, 2, 3, 4];
// var b = [1, 3];
function solve(a, b) {
  start = 0;
  end = a.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (a[mid] == b[1]) {
      if (b[0] === 0) {
        ans = mid;
        return ans;
      } else if (b[0] === 1) {
        ans = a.length - mid - 1;
        return ans;
      }
    } else {
      if (a[mid] > b[1]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return 0;
}

function runProgram(input) {
  n = input.trim().split("\n");
  var a = n[1].trim().split(" ").map(Number);
  var a = a.sort();
  var t = +n[2];
  line = 3;
  for (let i = 0; i < t; i++) {
    var b = n[line++].trim().split(" ").map(Number);
    console.log(solve(a, b));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4
  1 2 3 4
  3
  0 5
  1 3
  0 3`);
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

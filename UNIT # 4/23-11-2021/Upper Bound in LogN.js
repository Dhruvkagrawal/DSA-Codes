// var a = [0, 2, 4, 4, 5, 5, 7, 7, 9, 10];
// var key = 3;
function solve(a, key) {
  start = 0;
  end = a.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    ans = mid;
    if (a[mid] === key) {
      ans = mid + 1;
      start = mid + 1;
    } else {
      if (a[mid] > key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return ans;
}

function runProgram(input) {
  n = input.trim().split("\n");
  r1 = n[0].trim().split(" ").map(Number);
  key = +r1[1];
  a = n[1].trim().split(" ").map(Number);
  console.log(solve(a, key));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`10 4
  0 2 4 4 5 5 7 7 9 10`);
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

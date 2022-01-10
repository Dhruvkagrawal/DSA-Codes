function solve(a) {
  let ans = -1;
  let start = 0;
  let end = a.length - 1;
  while (start <= end) {
   let mid = Math.floor(start + (end - start) / 2);
    if (a[mid] === 1) {
      ans = mid;
      end = mid - 1;
    } else if (a[mid] === 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

function runProgram(input) {
  let n = input.trim().split("\n");
  let a = n[1].trim().split(" ").map(Number);
  console.log(solve(a));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  0 0 0 1 1`);
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

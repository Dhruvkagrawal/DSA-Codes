solve = (a, key, low, high, ans) => {
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (a[mid] === key) {
      ans = mid;
      low = mid + 1;
    } else {
      if (a[mid] > key) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  if (ans >= 0) {
    return ans + 1;
  } else {
    return -1;
  }
};
function runProgram(input) {
  n = input.trim().split("\n");
  key1 = n[0].trim().split(" ").map(Number);
  key = +key1[1];
  a = n[1].trim().split(" ").map(Number);
  var low = 0;
  var high = a.length - 1;
  var ans;
  console.log(solve(a, key, low, high, ans));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`7 1
1 1 4 5 6 7 8`);
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

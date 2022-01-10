// var a = [-3, -2, 0, 3, 4];
// var key = 33;
// var low = 0;
// var high = a.length - 1;
function solve(a, key, low, high) {
  if (low > high) {
    return "-1";
  }
  mid = Math.floor(low + (high - low) / 2);
  if (a[mid] == key) {
    return "1";
  } else {
    if (a[mid] > key) {
      high = mid - 1;
      return solve(a, key, low, high);
    } else {
      low = mid + 1;
      return solve(a, key, low, high);
    }
  }
}
// console.log(solve(a, key, low, high));

function runProgram(input) {
  n = input.trim().split("\n");
  key1 = n[0].trim().split(" ").map(Number);
  key = +key1[1];
  a = n[1].trim().split(" ").map(Number);
  var low = 0;
  var high = a.length - 1;
  console.log(solve(a, key, low, high));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5 0
    2 -2 0 3 4`);
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

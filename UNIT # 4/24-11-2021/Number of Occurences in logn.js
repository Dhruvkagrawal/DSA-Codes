// var a = [2, 3, 3, 3, 6, 9];
// var key = 3;
function lower(a, key) {
  low = 0;
  high = a.length - 1;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (a[mid] === key) {
      ans = mid;
      high = mid - 1;
    } else {
      if (a[mid] > key) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return ans;
}
function higher(a, key) {
  low = 0;
  high = a.length - 1;
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
  return ans;
}

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  key = +n[2];
  final = higher(a, key) - lower(a, key) + 1;
  a1 = lower(a, key);
  b1 = higher(a, key);
  ans = [];
  ans.push(a1, b1, final);
  console.log(ans.join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`6
  1 1 1 2 2 2	
  1`);
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

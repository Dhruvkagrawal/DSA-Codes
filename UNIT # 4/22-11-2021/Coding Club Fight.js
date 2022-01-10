// var a = [1, 2, 3, 4, 5, 6, 7];
// var b = 10;
function solve(a, b) {
  start = 0;
  end = a.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (a[mid] == b) {
      return mid;
    } else {
      if (a[mid] > b) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return a.length - 1;
}

function runProgram(input) {
  n = input.trim().split("\n");
  var r = +n[0];
  line = 1;
  a = [];
  for (let i = 0; i < r; i++) {
    a.push(line++);
  }
  var t = +n[line++];
  for (let i = 0; i < t; i++) {
    b = +n[line++];
    ans = [];
    var q = solve(a, b);
    sum = 0;
    for (let i = 0; i <= q; i++) {
      sum = sum + a[i];
    }
    ans.push(q + 1, sum);
    console.log(ans.join(" "));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`7
  1 
  2 
  3 
  4 
  5 
  6 
  7
  3
  3
  10
  2`);
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

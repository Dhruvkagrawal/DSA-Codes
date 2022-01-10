function solve(a, arr) {
  if (arr[a] !== -1) {
    return arr[a];
  }
  arr[a] = solve(a - 1, arr) + solve(a - 2, arr);
  return arr[a];
}

function runProgram(input) {
  a = +input[0];
  arr = [-1, 0, 1];
  for (let i = 2; i < a; i++) {
    arr.push(-1);
  }
  console.log(solve(a, arr));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`38`);
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

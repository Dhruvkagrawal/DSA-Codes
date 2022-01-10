function runProgram(input) {
  n = input.trim().split("\n");
  var a = n[1].trim().split(" ").map(Number);
  var ans = [0, 0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 0) {
      ans[0]++;
    } else if (a[i] === 1) {
      ans[1]++;
    } else {
      ans[2]++;
    }
  }
  console.log(ans.join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`10
  0 1 0 1 1 1 0 2 2 0 `);
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

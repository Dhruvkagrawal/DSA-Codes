function runProgram(input) {
  n = input.trim().split("\n");
  var rc1 = n[0].trim().split(" ").map(Number);
  var r1 = +rc1[0];
  var rc2 = n[r1 + 1].trim().split(" ").map(Number);
  var r2 = +rc2[0];
  line = 1;
  a = [];
  for (let i = 0; i < r1; i++) {
    sub = n[line++].trim().split(" ").map(Number);
    a.push(sub);
  }
  line = r1 + 2;
  b = [];
  for (let i = 0; i < r2; i++) {
    sub1 = n[line++].trim().split(" ").map(Number);
    b.push(sub1);
  }
  sum1 = 0;
  sum2 = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      sum1 = sum1 + a[i][j];
    }
  }
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      sum2 = sum2 + b[i][j];
    }
  }
  if (sum1 > sum2) {
    console.log(sum1);
  } else {
    console.log(sum2);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3 4
  1 2 3 4
  0 5 6 1
  9 3 0 8
  2 2
  8 8
  8 8`);
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

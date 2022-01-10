function solve(a, k) {
  a.sort().reverse();
  b = [...new Set(a)];
  rank = 1;
  ans = [];
  j = 0;
  for (let i = 0; i < a.length; i++) {
    if (b[j] === a[i]) {
      ans.push(rank);
    } else {
      ans.push(ans.length + 1);
      rank = ans.length;
      j++;
    }
  }
  console.log(ans);
  count = 0;
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] <= k) {
      count++;
    }
  }
  console.log(count);
}

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    r = n[line++].trim().split(" ").map(Number);
    k = +r[1];
    console.log(k);
    a = n[line++].trim().split(" ").map(Number);
    solve(a, k);
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
  5 4
  1 1 1 1 1 `);
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

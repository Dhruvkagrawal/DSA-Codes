function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  b = n[2].trim().split(" ").map(Number);
  b.sort((a, b) => a - b);
  ans = [];
  for (let i = 0; i < b.length; i++) {
    ans.push(Math.abs(a[i] - b[i]));
  }
  high = ans[0];
  for (let i = 0; i < ans.length; i++) {
    if (high > ans[i]) {
      high = ans[i];
    }
  }
  console.log(high);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`76
    -83 7 -79 -78 62 -32 -85 -67 -16 41 99 -78 68 13 -83 -17 97 19 -33 -31 -23 -93 -89 -7 -64 48 2 71 51 48 -84 -11 38 -90 86 -56 88 -67 -70 -83 -91 24 -98 -74 90 -49 -65 -14 -17 95 39 96 -93 -81 -35 -12 -74 -82 -47 42 36 75 -47 41 -31 -49 -62 32 97 -54 96 -44 -65 81 -50 -33
    40 -96 13 -12 24 80 -49 -3 1 2 20 95 -77 97 -80 32 50 90 -80 -63 24 -42 100 -40 31 55 -57 -8 -99 -97 100 66 -45 94 42 -58 33 31 -49 -98 16 -54 47 -83 -72 -41 -71 -63 16 68 98 63 56 24 99 -43 -77 18 44 -91 2 -80 71 -3 -55 86 -63 59 10 24 `);
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

// console.log(Math.abs(-83 - 40));

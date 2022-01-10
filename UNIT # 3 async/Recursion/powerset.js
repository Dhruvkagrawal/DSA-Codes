function gs(a, b, cur, c) {
  if (b.length >= 0) {
    console.log(b.join(" "));
  }
  if (cur == a.length) {
    return;
  }
  for (let i = cur; i < a.length; i++) {
    b.push(a[i]);
    gs(a, b, i + 1, c);
    b.pop(b.length - 1);
  }
}

function runProgram(input) {
  n = input.trim().split(" ").map(Number);
  c = n[1];
  a = [];
  for (let i = 1; i <= n[0]; i++) {
    a.push(i);
  }
  b = [];
  cur = 0;
  gs(a, b, cur, c);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4 2`);
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

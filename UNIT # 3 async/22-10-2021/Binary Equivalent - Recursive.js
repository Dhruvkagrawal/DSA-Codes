function binary(a, arr) {
  if (a === 1) {
    arr.push(1);
    return;
  }
  //   a1 = a % 2;
  arr.push(a % 2);
  //   a = Math.floor(a / 2);
  return binary(Math.floor(a / 2), arr), arr;
}
// console.log(binary(a, arr).reverse().join(""));

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = +n[line++];
    arr = [];
    console.log(binary(a, arr).reverse().join(""));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  15
  128
  `);
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

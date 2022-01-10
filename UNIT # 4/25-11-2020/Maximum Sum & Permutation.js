// var a = [2, 5, 1, 6];
// a = a.sort();
// sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum = sum + a[i] * i;
// }
// console.log(sum);

function runProgram(input) {
  n = input.trim().split("\n");
  t = +n[0];
  a = n[1].trim().split(" ").map(Number);
  a.sort(function (a, b) {
    return a - b;
  });
  sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i] * i;
  }
  console.log(sum);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`10
  0 9 22 20 19 20 11 5 0 2`);
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

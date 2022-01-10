function factorial(a) {
  ans = 1;
  if (a <= 1) {
    ans = 1;
    return ans;
  }
  ans = a * factorial(a - 1);
  return ans;
}

function runProgram(input) {
  var a = Number(input);
  console.log(factorial(a));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});

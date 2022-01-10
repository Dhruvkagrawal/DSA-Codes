function fiboanci(a) {
  ans = 0;
  if (a === 0) {
    ans = 0;
    return ans;
  }
  if (a === 1 || a === 2) {
    ans = 1;
    return ans;
  }
  ans = fiboanci(a - 1) + fiboanci(a - 2);
  return ans;
}

function runProgram(input) {
  var a = Number(input);
  console.log(fiboanci(a));
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

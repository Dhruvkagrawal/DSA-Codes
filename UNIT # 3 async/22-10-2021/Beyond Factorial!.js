// var a = 3;
// var a1 = 2;
// var a2 = 1;
// b = Math.log(a);
// c = Math.log(a1);
// d = Math.log(a2);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log((b + c + d).toFixed(4));

function bf(a) {
  if (a === 1) {
    return 0;
  }
  return Math.log(a) + bf(a - 1);
}

function runProgram(input) {
  var a = Number(input);
  console.log(bf(a).toFixed(4));
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

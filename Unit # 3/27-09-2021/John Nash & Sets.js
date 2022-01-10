// var a = [1, 2, 3, 4];
// var b = [1, 2, 3, 4, 5];
// var arr = a.concat(b);
// var set = new Set(arr);
// console.log(...set);
function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 2;
  for (let i = 0; i < t; i++) {
    var a = n[line].trim().split(" ").map(Number);
    line = line += 2;
    var b = n[line].trim().split(" ").map(Number);
    line = line += 2;
    var arr = a.concat(b);
    var set = new Set(arr);
    var c = [...set];
    console.log(c.sort().reverse().join(" "));
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`1
    4
    1 2 3 4
    5
    1 2 3 4 5`);
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

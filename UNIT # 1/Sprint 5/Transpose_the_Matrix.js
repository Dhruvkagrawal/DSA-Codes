function runProgram(input) {
n = input.trim().split("\n")
var rc = n[0].trim().split(" ").map(Number);
var row = +rc[0];
var colum = +rc[1];
line = 1;
var a = []
for (let k = 0; k < row; k++) {
    var mat = n[line].trim().split(" ").map(Number);
    a.push(mat)
    line++
}
for (var i = 0; i < colum; i++) {
    var arr = []
     for (var j = 0; j < a.length; j++) {
         arr.push(a[j][i])
     }
     console.log(arr.join(" "));
}
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5 4
  0 0 0 0
  1 1 1 1
  2 2 2 2
  3 3 3 3
  4 4 4 4`);
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
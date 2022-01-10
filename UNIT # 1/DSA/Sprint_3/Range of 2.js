function Range(a,b) {
    for (var i = a; i <= b; i*=2) {
        console.log(i);
    }
}

function runProgram(input) {
n =input.trim().split(" ").map(Number)
var a = n[0];
var b = n[1];
Range(a,b)
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4 10`);
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
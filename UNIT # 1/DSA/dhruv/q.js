




function runProgram(input) {
n = input.trim().split("\n")
a = n[1].trim().split(" ").map(Number);
budget = +n[2].trim()
sum = 0;
for (var i = 0; i < a.length; i++) {
    sum = sum + a[i]
}
if (sum<=budget) {
    console.log("Hire");
}else{
    console.log("No Hire");
}
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3
  4 10 17
  51`);
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
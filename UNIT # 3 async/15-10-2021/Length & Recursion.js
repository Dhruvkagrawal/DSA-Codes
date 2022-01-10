function length(a) {
  count = 0;
  for (let i = 0; i < a.length; i++) {
    count++;
  }
  return count;
}

function runProgram(input) {
  a = input.trim();
  console.log(length(a));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`masaischool`);
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

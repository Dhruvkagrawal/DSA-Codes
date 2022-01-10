function runProgram(input) {
  var index = input.split("\n");
  var a = index[1].split(" ").map(Number);
  count = 0;
  for (var i = 0; i < a.length; i++) {
    if (i == 0 && a[i] > a[i + 1]) {
      count++;
    } else if (i == a.length - 1 && a[i] > a[i - 1]) {
      count++;
    } else if (a[i] > a[i + 1] && a[i] > a[i - 1]) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`8
1 2 3 4 2 1 6 5`);
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

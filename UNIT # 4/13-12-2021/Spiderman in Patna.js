// var a = [10, 30, 40, 20];
// var low = a[0];
// var high = a[0];
// for (let i = 0; i < a.length; i++) {
//   if (low >= a[i]) {
//     low = a[i];
//   }
//   if (high <= a[i]) {
//     high = a[i];
//   }
// }
// console.log(high - low);

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  var low = a[0];
  var high = a[0];
  for (let i = 0; i < a.length; i++) {
    if (low >= a[i]) {
      low = a[i];
    }
    if (high <= a[i]) {
      high = a[i];
    }
  }
  console.log(high - low);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4
  10 30 40 20`);
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

// var a = [39, 27, 11, 4, 24, 32, 32, 1];
// arr = [-1];
// for (let i = 1; i < a.length; i++) {
//   let j;
//   for (let j = i; j >= 0; j--) {
//     if (a[i] > a[j]) {
//       arr.push(a[j]);
//       break;
//     }
//     if (j === 0) {
//       arr.push(-1);
//     }
//   }
// }
// console.log(arr.join(" "));

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  arr = [-1];
  for (let i = 1; i < a.length; i++) {
    let j;
    for (let j = i; j >= 0; j--) {
      if (a[i] > a[j]) {
        arr.push(a[j]);
        break;
      }
      if (j === 0) {
        arr.push(-1);
      }
    }
  }
  console.log(arr.join(" "));
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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

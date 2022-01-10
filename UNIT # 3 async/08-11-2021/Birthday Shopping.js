// var a = [3, 1];
// b = a[1];
// arr = [];
// for (let i = 1; i <= a[0]; i++) {
//   arr.push(i);
// }
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     ans = [];
//     ans.push(arr[i] + " " + arr[j]);
//     console.log(ans.join(" "));
//   }
// }

function runProgram(input) {
  a = input.trim().split(" ").map(Number);
  b = a[1];
  arr = [];
  for (let i = 1; i <= a[0]; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      ans = [];
      if (b === 2) {
        ans.push(arr[i] + " " + arr[j]);
        console.log(ans.join(" "));
      } else if (b === 1) {
        console.log(a[j]);
      }
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3 1`);
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

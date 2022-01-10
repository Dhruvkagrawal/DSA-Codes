// // var a = "aabbc";
// // var b = "abcd";
// arr = [];
// for (let i = 0; i < a.length; i++) {
//   count = 0;
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] !== b[j]) {
//       count++;
//       if (count > 2) {
//         arr.push(a[i]);
//       }
//     }
//   }
// }
// if (arr.length === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var a = n[1].trim().split(" ");
  var b = n[3].trim().split(" ");
  arr = [];
  for (let i = 0; i < a.length; i++) {
    count = 0;
    for (let j = 0; j < b.length; j++) {
      if (a[i] !== b[j]) {
        count++;
        if (count > 2) {
          arr.push(a[i]);
        }
      }
    }
  }
  if (arr.length === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  aabbc
  3
  abc`);
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

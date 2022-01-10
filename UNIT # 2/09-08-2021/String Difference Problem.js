// var a = "TESTCASE";
// var b = "TESOCASE";
// i = 0; j = 0;
// while (i<a.length) {
//     while (j<b.length) {
//         if (a[i]!==b[j]) {
//           console.log(a[i]);
//         }
//         j++
//         break;
//     }
//     i++
// }


function runProgram(input) {
n = input.trim().split("\n")
var a = n[0].trim();
var b = n[1].trim();
i = 0; j = 0;
while (i<a.length) {
    while (j<b.length) {
        if (a[i]!==b[j]) {
          console.log(a[i]);
        }
        j++
        break;
    }
    i++
}
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`ABCX
  ABCD`);
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

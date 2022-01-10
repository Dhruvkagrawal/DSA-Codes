// var a = [4, 5, 3, 7, 1];
// for (let i = 0; i < a.length; i++) {
//   min = i;
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[min] > a[j]) {
//       min = j;
//     }
//   }
//   [a[i], a[min]] = [a[min], a[i]];
// }
// ans = a;
// var a = [4, 5, 3, 7, 1];
// ans2 = [];
// for (let i = 0; i < a.length; i++) {
//   ans2.push(a.indexOf(ans[i]));
// }
// console.log(ans2.join(" "));

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim().split(" ").map(Number);
  for (let i = 0; i < a.length; i++) {
    min = i;
    for (let j = i; j < a.length; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    [a[i], a[min]] = [a[min], a[i]];
  }
  ans = a;
  a = n[1].trim().split(" ").map(Number);
  ans2 = [];
  for (let i = 0; i < a.length; i++) {
    ans2.push(a.indexOf(ans[i]));
  }
  console.log(ans2.join(" ").trim());
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  4 5 3 7 1`);
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

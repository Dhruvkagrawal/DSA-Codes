// var a = "){(){[])}]";
// var count1 = 0;
// var count2 = 0;
// var count3 = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] == "{" || a[i] == "}") {
//     count1++;
//   } else if (a[i] == "(" || a[i] == ")") {
//     count2++;
//   } else if (a[i] == "[" || a[i] == "]") {
//     count3++;
//   }
// }
// console.log(count1);
// console.log(count2);
// console.log(count3);
// if (count1 === count2 && count2 === count3) {
//   console.log("balanced");
// } else {
//   console.log("not balanced");
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = n[line++];
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] == "{" || a[i] == "}") {
        count1++;
      } else if (a[i] == "(" || a[i] == ")") {
        count2++;
      } else if (a[i] == "[" || a[i] == "]") {
        count3++;
      }
    }
    if (
      (count1 % 2 === count2 % 2 && count2 % 2 === count3 % 2) ||
      (count1 === count2 && count2 === count3)
    ) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`5
  ){(){[])}]
  ]]])}[(}}{
  {{}}
  [(){}{())[
  [}]{(}[[}[
  `);
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

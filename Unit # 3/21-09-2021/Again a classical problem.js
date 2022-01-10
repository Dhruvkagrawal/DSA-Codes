// var a = "([]";
// a1 = 0;
// a2 = 0;
// b2 = 0;
// b1 = 0;
// c2 = 0;
// c1 = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] === "(") {
//     a1++;
//   } else if (a[i] === ")") {
//     a2++;
//   }
//   if (a[i] === "]") {
//     b1++;
//   } else if (a[i] === "[") {
//     b2++;
//   }
//   if (a[i] === "}") {
//     c1++;
//   } else if (a[i] === "{") {
//     c2++;
//   }
// }
// if (a1 === a2 && b1 === b2 && c1 === c2) {
//   console.log("balanced");
// } else {
//   console.log("not balanced");
// }

function runProgram(input) {
  n = input.trim().split("\n");
  var t = +n[0];
  line = 1;
  for (let i = 0; i < t; i++) {
    a = n[line++].trim();
    a1 = 0;
    a2 = 0;
    b2 = 0;
    b1 = 0;
    c2 = 0;
    c1 = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] === "(") {
        a1++;
      } else if (a[i] === ")") {
        a2++;
      }
      if (a[i] === "]") {
        b1++;
      } else if (a[i] === "[") {
        b2++;
      }
      if (a[i] === "}") {
        c1++;
      } else if (a[i] === "{") {
        c2++;
      }
    }
    if (a1 === a2 && b1 === b2 && c1 === c2) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`3
  {([])}
  ()
  {[(])}
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

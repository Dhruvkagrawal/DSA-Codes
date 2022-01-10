// var a = "[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]";
// var count1 = 0;
// var count2 = 0;
// var count3 = 0;
// var count4 = 0;
// var count5 = 0;
// var count6 = 0;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] === ")") {
//     count1++;
//   } else if (a[i] === "(") {
//     count2++;
//   } else if (a[i] === "]") {
//     count3++;
//   } else if (a[i] === "[") {
//     count4++;
//   } else if (a[i] === "}") {
//     count5++;
//   } else if (a[i] === "{") {
//     count6++;
//   }
// }
// if (count1 === count2 && count3 === count4 && count5 === count6) {
//   console.log("balanced");
// } else {
//   console.log("unbalanced");
// }

function runProgram(input) {
  a = input.trim();
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var count4 = 0;
  var count5 = 0;
  var count6 = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === ")") {
      count1++;
    } else if (a[i] === "(") {
      count2++;
    } else if (a[i] === "]") {
      count3++;
    } else if (a[i] === "[") {
      count4++;
    } else if (a[i] === "}") {
      count5++;
    } else if (a[i] === "{") {
      count6++;
    }
  }
  if (count1 === count2 && count3 === count4 && count5 === count6) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`{{)[](}}`);
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

// var a = 24;
// count = 0;
// while (a > 0) {
//   if (a > 5) {
//     b = Math.floor(a / 5);
//     count = count + b;
//   }
//   a = a % 5;
//   if (a >= 4) {
//     b = Math.floor(a / 4);
//     count = count + b;
//   }
//   a = a % 4;
//   if (a >= 3) {
//     b = Math.floor(a / 3);
//     count = count + b;
//   }
//   a = a % 3;
//   if (a >= 2) {
//     b = Math.floor(a / 2);
//     count = count + b;
//   }
//   a = a % 2;
//   if (a >= 1) {
//     b = Math.floor(a / 1);
//     count = count + b;
//   }
//   console.log(count);
//   break;
// }

function runProgram(input) {
  var a = Number(input);
  count = 0;
  while (a > 0) {
    if (a > 5) {
      b = Math.floor(a / 5);
      count = count + b;
    }
    a = a % 5;
    if (a >= 4) {
      b = Math.floor(a / 4);
      count = count + b;
    }
    a = a % 4;
    if (a >= 3) {
      b = Math.floor(a / 3);
      count = count + b;
    }
    a = a % 3;
    if (a >= 2) {
      b = Math.floor(a / 2);
      count = count + b;
    }
    a = a % 2;
    if (a >= 1) {
      b = Math.floor(a / 1);
      count = count + b;
    }
    console.log(count);
    break;
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});

process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});

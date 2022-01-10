// var a = arr;
// count = 1;
// large = a[0];
// var rate = size[1];
// for (var i = 1; i < a.length; i++) {
//     if (large < a[i]) {
//         count++;
//     }if (large<a[i]) {
//         large = a[i]
//     }
// }
// var earn = count*rate;

// function earning(arr,size) {
    
// }


function runProgram(input) {
input =input.trim().split("\n")
var textcases = +input[0];
line = 1
for (var i = 0; i < textcases; i++) {
    var size = input[line].trim().split(" ").map(Number)
    line++
    var arr = input[line].trim().split(" ").map(Number)
    line++;
    var rate = size[i]
  }
  console.log(rate);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`2
  6 3
  8 2 3 11 11 10
  5 12
  12 20 39 45 89`);
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
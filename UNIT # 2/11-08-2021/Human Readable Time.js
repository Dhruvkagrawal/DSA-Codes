function runProgram(input) {
  var a = Number(input);
  if (a >= 60) {
    var h = a / 60;
    h = Math.floor(h);
    var m = a % 60;
    if (h == 1) {
      console.log(h + "hr" + " " + m + "mins");
    } else if (m == 0) {
      console.log(h + "hrs" + " " + m + "0" + "mins");
    } else {
      console.log(h + "hrs" + " " + m + "mins");
    }
  } else if (a < 60) {
    var m = a % 60;
    console.log(0 + "hrs" + " " + m + "mins");
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

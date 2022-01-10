// var a = "abcd";
// var b = "";
// cur = 0;
function gs(a, b, cur) {
  if (b.length > 0) {
    console.log(b);
  }
  if (cur == a.length) {
    return;
  }
  for (let i = cur; i < a.length; i++) {
    b = b + a[i];
    gs(a, b, i + 1);
    b = b.substring(0, b.length - 1);
  }
}

// gs(a, b, cur);

// var str = "Hello TecAdmin";
// var newStr = str.substring(0, str.length - 1);
// console.log(newStr);

function runProgram(input) {
  n = input.trim().split("\n");
  a = n[1].trim();
  var b = "";
  cur = 0;
  gs(a, b, cur);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
  runProgram(`4
  abcd`);
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

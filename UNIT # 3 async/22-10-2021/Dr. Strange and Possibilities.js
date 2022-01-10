// var a1 = 3;
// ans = [];
// for (let i = 1; i <= a1; i++) {
//   ans.push(i);
// }
// var a = ans;
// var b = [];
// cur = 0;
function gs(a, b, cur) {
  if (b.length >= 0) {
    console.log(b.join(" "));
  }
  if (cur == a.length) {
    return;
  }
  for (let i = cur; i < a.length; i++) {
    b.push(a[i]);
    gs(a, b, i + 1);
    b.pop(b.length - 1);
  }
}

// gs(a, b, cur);

function runProgram(input) {
  var a1 = Number(input);
  ans = [];
  for (let i = 1; i <= a1; i++) {
    ans.push(i);
  }
  var a = ans;
  var b = [];
  cur = 0;
  gs(a, b, cur);
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

// count = 0;
// for (let i = 0; i < a.length; i++) {
//     if (a[i] !== 'India') {
//         count++
//     } else if (a[i] == "India") {
//         console.log(count + 1);
//     }
// }
function runProgram(input) {
    n = input.trim().split("\n");
    var t = +n[0]
    a = []
    line = 1;
    for (let j = 0; j < t; j++) {
        sub = n[line].trim();
        a.push(sub);
        line++
    }
    count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== 'India') {
            count++
        } else if (a[i] == "India") {
            console.log(count + 1);
        }
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`5
  Russia
  USA
  Japan
  China
  India`);
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
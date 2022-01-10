function runProgram(input) {
    n = input.trim().split("\n");
    var t = +n[0];
    line = 1;
    for (let j = 0; j < t; j++) {
        var lengt = +n[line];
        line++;
        var a = n[line].trim().split(" ").map(Number);
        line++
        sum = 0;
        l = 1
        for (let i = 0; i < a.length; i++) {
            sum = sum + (a[i] * l);
            l++
        }
        console.log(sum);
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`2
  5
  1 2 3 4 5
  2
  100 1`);
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
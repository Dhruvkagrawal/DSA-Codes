function units(n) {
    var units = 0;
    var a = n - 80;
    if (a > 650) {
        b = (a - 650) / 10
        units = 150 + b;
    } else if (a < 650) {
        b = (a - 150) / 5;
        units = 50 + b
    } else if (a < 150) {
        units = a / 3
    }
    console.log(units);
}

function runProgram(input) {
    n = +input.trim()
    units(n)
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`930`);
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

function ans(a) {
    count = 0
    for (var i = 0; i < a.length; i++) {
        if (a[i] === 42) {
            count++
        }
    }
    if (count === 0) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}


function runProgram(input) {
    n = input.trim().split("\n");
    var a = n[1].trim().split(" ").map(Number);
    ans(a)
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`5
    3 7 0 9 8 42`);
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
function runProgram(input) {
    n = input.trim().split(" ")
    var name = n[0];
    var gender = n[1]
    if (gender == "M") {
        console.log("Hello Mr." + " " + name);
    } else if (gender == "F") {
        console.log("Hello Mrs." + " " + name);
    }
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`Prateek F`);
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
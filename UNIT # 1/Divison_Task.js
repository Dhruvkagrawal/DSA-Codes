function runProgram(input) {
    var N = Number(input);
    var X = Math.floor(32 / N)
    if (X == 0) {
        console.log("Too Low");
    } else if (N == 0) {
        console.log("-1");
    } else {
        console.log(X);
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});
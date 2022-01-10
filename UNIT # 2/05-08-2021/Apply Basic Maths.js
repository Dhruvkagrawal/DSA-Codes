// var a = [14, 7, 8, 2, 4];
// var arr = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 7 == 0) {
//         arr.push(a[i])
//     }
// }
// var small = arr[0];
// for (let j = 0; j < arr.length; j++) {
//     if (small > arr[j]) {
//         small = a[j]
//     }
// }
// index = 0;
// for (let k = 0; k < a.length; k++) {
//     if (small == a[k]) {
//         index++
//     }
// }
// console.log(index);


function runProgram(input) {
    n = input.trim().split("\n");
    var a = n[1].trim().split(" ").map(Number);
    var arr = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 7 == 0) {
            arr.push(a[i])
        }
    }
    var small = arr[0];
    for (let j = 0; j < arr.length; j++) {
        if (small > arr[j]) {
            small = arr[j]
        }
    }
    ans = a.indexOf(small)
    console.log(ans);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`5
    18 794 259 404 945 483 884 155 214 279 965 830 941 249 491 353 459 40 293 749 783 21 619 68 650 321 939 230 767 786 78 604 776 864 740 721 615 32 4 501 6 643 150 676 152 955 598 582 402 967 143 254 675 769 340 458 707 867 666 206 565 733 175 810 925 972 675 449 684 854 854 901 39 853 618 527 456 525 685 850 47 770 133 521 263 944 264 906 669 858 265 724 827 432 641 654 73 538 687 324`);
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
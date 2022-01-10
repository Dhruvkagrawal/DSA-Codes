// var a = "abAbC";
// var b = "";
// for (let i = 0; i < a.length; i++) {
//     if (
//         a[i] === "a" ||
//         a[i] === "b" ||
//         a[i] === "c" ||
//         a[i] === "d" ||
//         a[i] === "e" ||
//         a[i] === "f" ||
//         a[i] === "g" ||
//         a[i] === "h" ||
//         a[i] === "i" ||
//         a[i] === "j" ||
//         a[i] === "k" ||
//         a[i] === "l" ||
//         a[i] === "m" ||
//         a[i] === "n" ||
//         a[i] === "o" ||
//         a[i] === "p" ||
//         a[i] === "q" ||
//         a[i] === "r" ||
//         a[i] === "s" ||
//         a[i] === "t" ||
//         a[i] === "u" ||
//         a[i] === "v" ||
//         a[i] === "w" ||
//         a[i] === "x" ||
//         a[i] === "y" ||
//         a[i] === "z"
//     ) {
//         b = b + a[i];
//     } else if (a[i] === "A") {
//         b = b + "a";
//     } else if (a[i] === "B") {
//         b = b + "b";
//     } else if (a[i] === "C") {
//         b = b + "c";
//     } else if (a[i] === "D") {
//         b = b + "d";
//     } else if (a[i] === "E") {
//         b = b + "e";
//     } else if (a[i] === "F") {
//         b = b + "f";
//     } else if (a[i] === "G") {
//         b = b + "g";
//     } else if (a[i] === "H") {
//         b = b + "h";
//     } else if (a[i] === "I") {
//         b = b + "i";
//     } else if (a[i] === "J") {
//         b = b + "j";
//     } else if (a[i] === "K") {
//         b = b + "k";
//     } else if (a[i] === "L") {
//         b = b + "l";
//     } else if (a[i] === "M") {
//         b = b + "m";
//     } else if (a[i] === "N") {
//         b = b + "n";
//     } else if (a[i] === "O") {
//         b = b + "o";
//     } else if (a[i] === "P") {
//         b = b + "p";
//     } else if (a[i] === "Q") {
//         b = b + "q";
//     } else if (a[i] === "R") {
//         b = b + "r";
//     } else if (a[i] === "S") {
//         b = b + "s";
//     } else if (a[i] === "T") {
//         b = b + "t";
//     } else if (a[i] === "U") {
//         b = b + "u";
//     } else if (a[i] === "V") {
//         b = b + "v";
//     } else if (a[i] === "W") {
//         b = b + "w";
//     } else if (a[i] === "X") {
//         b = b + "x";
//     } else if (a[i] === "Y") {
//         b = b + "y";
//     } else if (a[i] === "Z") {
//         b = b + "z";
//     }
// }
// console.log(b);

function runProgram(input) {
    n = input.trim().split("\n");
    var a = n[1].trim();
    var b = "";
    for (let i = 0; i < a.length; i++) {
        if (
            a[i] === "a" ||
            a[i] === "b" ||
            a[i] === "c" ||
            a[i] === "d" ||
            a[i] === "e" ||
            a[i] === "f" ||
            a[i] === "g" ||
            a[i] === "h" ||
            a[i] === "i" ||
            a[i] === "j" ||
            a[i] === "k" ||
            a[i] === "l" ||
            a[i] === "m" ||
            a[i] === "n" ||
            a[i] === "o" ||
            a[i] === "p" ||
            a[i] === "q" ||
            a[i] === "r" ||
            a[i] === "s" ||
            a[i] === "t" ||
            a[i] === "u" ||
            a[i] === "v" ||
            a[i] === "w" ||
            a[i] === "x" ||
            a[i] === "y" ||
            a[i] === "z"
        ) {
            b = b + a[i];
        } else if (a[i] === "A") {
            b = b + "a";
        } else if (a[i] === "B") {
            b = b + "b";
        } else if (a[i] === "C") {
            b = b + "c";
        } else if (a[i] === "D") {
            b = b + "d";
        } else if (a[i] === "E") {
            b = b + "e";
        } else if (a[i] === "F") {
            b = b + "f";
        } else if (a[i] === "G") {
            b = b + "g";
        } else if (a[i] === "H") {
            b = b + "h";
        } else if (a[i] === "I") {
            b = b + "i";
        } else if (a[i] === "J") {
            b = b + "j";
        } else if (a[i] === "K") {
            b = b + "k";
        } else if (a[i] === "L") {
            b = b + "l";
        } else if (a[i] === "M") {
            b = b + "m";
        } else if (a[i] === "N") {
            b = b + "n";
        } else if (a[i] === "O") {
            b = b + "o";
        } else if (a[i] === "P") {
            b = b + "p";
        } else if (a[i] === "Q") {
            b = b + "q";
        } else if (a[i] === "R") {
            b = b + "r";
        } else if (a[i] === "S") {
            b = b + "s";
        } else if (a[i] === "T") {
            b = b + "t";
        } else if (a[i] === "U") {
            b = b + "u";
        } else if (a[i] === "V") {
            b = b + "v";
        } else if (a[i] === "W") {
            b = b + "w";
        } else if (a[i] === "X") {
            b = b + "x";
        } else if (a[i] === "Y") {
            b = b + "y";
        } else if (a[i] === "Z") {
            b = b + "z";
        }
    }
    console.log(b);
}

if (process.env.USERNAME === "DHRUV KUMAR AGRAWAL") {
    runProgram(`5
  abAbC`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}
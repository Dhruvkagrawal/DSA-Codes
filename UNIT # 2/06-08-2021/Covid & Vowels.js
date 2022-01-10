var a = "dangerouscovid";
count = 0;
arr = []
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j <= a.length; j++) {
        str = "";
        for (let k = i; k < j; k++) {
            str = str + a[k]
        }
        for (let m = 0; m < str.length; m++) {
            console.log(str[m]);
            if (str[m] == "a" && str[m] == "i" && str[m] == "o" && str[m] == "u") {
                count++
            }
            console.log(count);
        }
    }
}



// var a = "dngerscv";
// count = 0;
// console.log();
//     if (a==="*a*") {
//         count++
//     }

// console.log(count);

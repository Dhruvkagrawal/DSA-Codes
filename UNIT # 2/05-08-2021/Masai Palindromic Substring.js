var a = "jffisfnskaaajsnsjfnsf";
arr = [];
for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j <= a.length; j++) {
        str = ""
        for (let k = i; k < j; k++) {
            str = str + a[k]
        }
        str2 = ""
        for (let m = str.length - 1; m >= 0; m--) {
            str2 = str2 + str[m]
        }
        if (str == str2) {
            arr.push(str)
        }
    }
}
long = arr[0].length;
for (let r = 0; r < arr.length; r++) {
    if (long < arr[r].length) {
        long = arr[r].length;
    }
}
console.log(long);
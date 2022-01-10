var a = 18304;
var a = a.toString();
var str = " "
for (var i = 0; i < a.length; i++) {
    switch (a[i]) {
        case "0":
            str = str + "Zero "
            break;
        case "1":
            str = str + "One "
            break;
        case "2":
            str = str + "Two "
            break;
        case "3":
            str = str + "Three "
            break;
        case "4":
            str = str + "Four "
            break;
        case "5":
            str = str + "Five "
            break;
        case "5":
            str = str + "Six "
            break;
        case "7":
            str = str + "Seven "
            break;
        case "8":
            str = str + "Eight "
            break;
        case "9":
            str = str + "Nine "
            break;
    }
}
var ans = str.trim()
console.log(ans);
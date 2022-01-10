var a = "wednesday";
var n = 8
var week = [["Monday"],["Tuesday"],["Wednesday"],["Thursday"],["Friday"],["Saturday"],["Sunday"]]
if (n%7===1) {
    a = week[3]+1
}
console.log(a);
var a = 25;
c = 0;
if (a > 13) {
  c = a / 13;
  c = c + Math.floor(c);
  a = a - 13;
}
console.log(a);
console.log(c);

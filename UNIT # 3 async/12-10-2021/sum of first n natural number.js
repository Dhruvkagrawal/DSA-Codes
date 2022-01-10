var a = 5;
function fact(a) {
  var ab = 1;
  if (a <= 1) {
    return 1;
  }
  ab = a + fact(a - 1);
  return ab;
}
console.log(fact(a));

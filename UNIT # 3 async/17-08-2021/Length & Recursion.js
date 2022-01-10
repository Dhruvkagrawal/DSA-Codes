var a = "masaischool";
i = 0;
function length(a, i) {
  if (a === "") {
    return 0;
  }
  return 1 + length(a, i + 1);
}
console.log(length(a, i));

var a = "{}()[]";
stack = [];
// let Map = new Map([
//   ["(", ")"],
//   ["{", "}"],
//   ["[", "]"],
// ]);
for (let i = 0; i < a.length; i++) {
  if (a[i] === "{" || a[i] === "(" || a[i] === "[") {
    stack.push(a[i]);
  } else if (stack.length === 0) {
    return false;
  }
}
console.log(stack.Map());

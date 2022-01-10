const getAllSubsets = (a) =>
  a.reduce(
    (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
    [[]]
  );

console.log(getAllSubsets([1, 2, 3, 4, 5, 6, 7, 8, 9]));

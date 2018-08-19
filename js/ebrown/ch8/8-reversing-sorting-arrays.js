const arr = [1, 2, 3, 4, 5];
console.log(arr.reverse());

const arr1 = [5, 3, 2, 4, 1];
console.log(arr1.sort());

const arr2 = [{ name: "Suzanne" }, { name: "Jim" }, { name: "Trevor" }, { name: "Amanda" }];
arr2.sort();
console.log(arr2.sort());

// arr2.sort((a, b) => a.name > b.name);
// console.log(arr2.sort(a,b));

arr2.sort((a, b) => a.name[1] < b.name[1]);
console.log(arr2.sort(a, b));

/////////// idk ?????
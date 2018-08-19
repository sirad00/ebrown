const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
    { name: "Fred", type: "object", luckyNumbers : [5, 7, 13] },
    [
        { name: "Susan", type: "object" },
        { name: "Anthony", type: "object" },
    ],
    1,
    function () { return "arrays can contain functions too"; },
    "three",
];
// console.log(arr4[1][1]);
arr1[4]=5;
// console.log(arr1);
arr2[10] = 5;
console.log(arr2.length);
// const arr = [2, 3, -5, 15, 7];
// Math.min.apply(null, arr);
// console.log(Math.min.apply(null, arr));

// const newBruce = [1940, "martial artist"];
// update.call(bruce, ...newBruce);
// Math.min(...arr);
// // -5
// console.log(Math.min(...arr));
// Math.max(...arr);

const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }
console.log(Bruce);
updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
// madeline is unchanged
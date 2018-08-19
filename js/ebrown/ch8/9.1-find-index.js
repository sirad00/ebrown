//finIndex return an index or -1 if there's no match
//findIndex is more flexible than indexOf, though, in that you can provide a function that determines if an element is a match

const arr = [{ id:5, name: "Judith" }, { id: 7, name: "Francis" }];
console.log(arr.findIndex(o => o.id === 5));
console.log(arr.findIndex(o => o.name === "Francis"));
console.log(arr.findIndex(o => o.name === "Judith"));
console.log(arr.findIndex(o => o.id === 7));

//done
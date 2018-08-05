const bruce = {
    name: "Bruce",
    birthYear: 2005,
};

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

// function updateName(name) {
//     this.name = name;
// }

update.call(bruce, 1949, 'singer');
// updateName.call(bruce, 'bubu');
console.log(bruce);

update.apply(bruce, [1955, "actor"]);
console.log(bruce);


const updatebruce = update.bind(bruce);
updatebruce(1904, "programator");
console.log(bruce);
// updatebruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" };
// madeline is unchanged
const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };
const userRoles = new Map();

// userRoles.set(u1, 'User');
// userRoles.set(u2, 'User');
// userRoles.set(u3, 'Admin');

userRoles.
    set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');

// const userRoles = new Map([
//     [u1, 'User'],
//     [u2, 'User'],
//     [u3, 'Admin'],
//     ]);


console.log(userRoles.get(u2)); // user
console.log(userRoles.has(u1)); // the has() method to determine if a map contains a given key:
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

console.log(userRoles.get(u1));
userRoles.set(u1, "admin");
console.log(userRoles.get(u1));
console.log(userRoles.size);

// for...of loop

for (let u of userRoles.keys())
    console.log(u.name);
for (let r of userRoles.values())
    console.log(r);
for (let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);

//or

// can use destructuring to make this iteration even more natural
for (let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);

//or

// the entries() method is the default iterator for  aMap, so you can shorten the previous example to: 
for (let [u, r] of userRoles)
    console.log(`${u.name}: ${r}`);

console.log([...userRoles.values()]); // need an array instead of an iterable object

userRoles.delete(u2);
console.log(userRoles.size); // delete a single entry from a map;

userRoles.clear(); // remove all entries
console.log(userRoles.size);
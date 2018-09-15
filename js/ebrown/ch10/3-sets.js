const roles = new Set();
roles.add("user");
roles.add("admin");
roles.add("user");
console.log(roles);
console.log(roles.size);

console.log(roles.delete('admin'));
console.log(roles);
console.log(roles.delete('user'));
let user = {
    name = "Darina",
    age = 23,
};

function greet(user) {
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear(user) {
    return new Date().getFullYear() - user.age;
}

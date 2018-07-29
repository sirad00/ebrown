const o = {
    name: 'Wallace',
    // primitive property
    bark: function () { return 'Woof!'; }, 
}
console.log(o);
//or
const i = {
    name: 'Wallace',
    bark() { return 'Woof!'; },
    }
    console.log(i);

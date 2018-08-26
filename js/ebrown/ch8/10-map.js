// Whenever the array is in one format and you need it in another, use map . 
//Both map and filter return copies, and do not modify the original array; 

const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
// const names = cart.map(x => x.name);
const names = cart.map(transformObj);


function transformObj(x) {
    return x.name;
}


// const prices = cart.map(x => x.price);
// const discountPrices = prices.map(x => x * 0.8);
// const lcNames = names.map(String.toLowerCase); // ["widget", "gadget"]????????????????

console.log(names);
// console.log(prices);
// console.log(discountPrices);
// console.log(lcNames);

// ce eroare e la lcNames??

// const items = ["Widget", "Gadget"];
// const carty = items.map((x, i) => ({ name: x, price: prices[i]}));
// console.log(carty);



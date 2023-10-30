// console.log("My first Node.js app");

// 1.feladat

const arr = [1, 2, 3, 10, 3, 5];

console.log(Math.max(...arr));

let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

// 2. feladat

const num = 123;

const numbers = num.toString().split("").map(Number);
let amount = 0;

for (let i = 0; i < numbers.length; i++) {
  amount += numbers[i];
}

console.log(amount);

//  3. feladat>

const product1 = {
  name: "Kenyér",
  quantity: 10,
  price: 500,
  id: "kgsjdhgsdf",
};

const product2 = {
  name: "Kifli",
  quantity: 3,
  price: 100,
  id: "kgsjdhgdgdfgf",
};

const product3 = {
  name: "Tej",
  quantity: 20,
  price: 600,
  id: "kgsjdhgsd20f",
};

const products = [product1, product2, product3];

const printProducts = function () {
  products.forEach((product) => console.log(product));
};

// let cheapest = products.reduce(function (prev, curr) {
//   return prev.price < curr.price ? prev : curr;
// }, Infinity);

// // console.log(cheapest.price);

// let newProductPrice = function (id, newPrice) {
//   const product = products.find((p) => p.id === id);

//   if (product != null) {
//     product.price = newPrice;
//   } else {
//     console.log("Termék nem található");
//   }
// };
// newProductPrice("kgsjdhgsd20f", 500);

// console.log(products);
// console.log(process.argv[2]);

// newProductPrice(process.argv[2], Number(process.argv[3]));
// console.log(products);

const userNum = process.argv[2];
if (isNaN(Number(userNum))) {
  console.log("Nem megfelelő input");
} else {
  const sum = userNum
    .split("")
    .reduce((currentSum, digit) => currentSum + Number(digit), 0);
  console.log(`A ${userNum} szám számjegyeinek összege ${sum}`);
}

module.exports.printProducts = printProducts;

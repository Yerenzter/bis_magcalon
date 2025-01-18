let products = [
  {
    name: "Coke",
    price: 20.0,
  },
  {
    name: "Nescafe 3 in 1",
    price: 15.0,
  },
  {
    name: "Fresca Tuna",
    price: 34.0,
  },
  {
    name: "Firefox",
    price: 0.0,
  },
  {
    name: "Toblerone",
    price: 60.00
  },
  {
    name: "Corndog",
    price: 30.0,
  },
  {
    name: "Debian",
    price: 0.0,
  },
  {
    name: "Milktea",
    price: 52.00
  }
];
let x = [];
let y = [];
let z = [];
let zRanked = [];

for (let r = 0; r < products.length; r++) {
  x.push(products[r].price);
}

x.sort().reverse();

for (let r = 0; r < x.length; r++) {
  for (let c = 0; c < x.length; c++) {
    if (x[r] === products[c].price) {
      y.push(products[c].name);
    }
  }
}

let y1 = new Set(y)
let y2 = [...y1]

for(let r=0; r < x.length; r++) {
    z.push({name: y2[r], price: x[r]})
}

for(let r=0; r < 3; r++) {
    zRanked.push(z[r]);
}

console.log(zRanked)
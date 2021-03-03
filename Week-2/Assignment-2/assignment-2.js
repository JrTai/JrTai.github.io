function avg(data) {
  // your code here
  var total_price = 0;
  for (var product of data.products) {
    total_price += product.price;
  };
  return total_price / data.size;
};

console.log(avg({
  size: 3,
  products: [{
    name: "Product 1",
    price: 100
  }, {
    name: "Product 2",
    price: 700
  }, {
    name: "Product 3",
    price: 250

  }]
}))
// should print the average price of all products

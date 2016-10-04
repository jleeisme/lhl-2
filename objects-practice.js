var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  // {
  //   name: "Bombardier",
  //   province: "AB",
  //   sales: [ 80, 20, 10, 100, 90, 500 ]
  // },
  // {
  //   name: "Telus",
  //   province: "SK",
  //   sales: [ 500, 100 ]
  // }
];

// var getSales = companySalesData.map(function(item) {
//     return item.sales;
// });




// var sum = 0;

// for (var i in getSales) {
//   sum += getSales[i];
// };

// var total = extraStep.reduce((prev, curr) => prev + curr);

// var total = companySalesData.reduce(function(prev, curr) {
//   return prev + curr.sales;
// }, 0);
// console.log(total);
// var companySales = 0;

var companySales = companySalesData.map(function(sale) {
  return sale.sales;
});

var extraStep = companySales.reduce(function(prev, curr) {
  return prev + curr;
});

var total = extraStep.reduce(function(prev, curr) {
  return prev + curr;
});

console.log(total);
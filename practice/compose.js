var _ = require('ramda');

// 示例数据
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// 1
const isLastInStock = _.compose(_.prop('in_stock'), _.last);
console.log(isLastInStock(CARS));

// 2
const getFirstCarName = _.compose(_.prop('name'), _.head());
console.log(getFirstCarName(CARS));

// 练习 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 使之成为一个组合
const _average = xs => _.reduce(_.add, 0, xs) / xs.length; // <- 无须改动

const averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')));
console.log(averageDollarValue(CARS));

// 练习 4:
// ============
// 使用 compose 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串：例如：sanitizeNames(["Hello World"]) //=> ["hello_world"]。
const _underscore = _.replace(/\W+/g, '_'); //<-- 无须改动，并在 sanitizeNames 中使用它

const sanitizeNames = _.map(_.compose(_underscore, _.toLower));
console.log(sanitizeNames(["Hello World"]));

// 彩蛋 1:
// ============
// 使用 compose 重构 availablePrices

// const availablePrices = function(cars) {
//   var available_cars = _.filter(_.prop('in_stock'), cars);
//   return available_cars.map(function(x){
//     return accounting.formatMoney(x.dollar_value);
//   }).join(', ');
// };
const availablePrices = _.compose(
  _.join(', '),
  _.map(_.prop('dollar_value')),
  _.filter(_.prop('in_stock'))
);
console.log(availablePrices(CARS));

// 彩蛋 2:
// ============
// 重构使之成为 pointfree 函数。提示：可以使用 _.flip()
// var fastestCar = function(cars) {
//   var sorted = _.sortBy(function(car){ return car.horsepower }, cars);
//   var fastest = _.last(sorted);
//   return fastest.name + ' is the fastest';
// };
// var trace = _.curry(function(tag, x){
//   console.log(tag, x);
//   return x;
// });
const fastestCar = _.compose(
  _.join(''),
  _.flip((a, b) => [a, b])(' is the fastest'),
  _.prop('name'),
  _.last,
  _.sortBy(_.prop('horsepower'))
);
console.log(fastestCar(CARS));
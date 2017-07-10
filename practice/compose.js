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
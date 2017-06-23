const R = require('ramda');

const words = R.curry(Array.prototype.split)('');

console.log(words('qwer qwer'));
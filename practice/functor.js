// Declarative 做什么，不是怎么做
require('./support');
const Task = require('data.task');
const _ = require('ramda');

// 练习 1
// ==========
// 使用 _.add(x,y) 和 _.map(f,x) 创建一个能让 functor 里的值增加的函数
const ex1 =_.map(_.add(1));

const vl1 = ex1(Identity.of(1));
console.log(vl1.__value);
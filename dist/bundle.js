(function () {
  'use strict';

  // 类型的分类：基础类型、高级类型、内置类型、自定义类型
  // TS类型都是在变量后来写 ： 后面是类型 = 号后面是值
  // 不同文件下的最外层声明的变量都会被TS认为是全局变量，可以使用export {} 让TS认为是模块内的变量
  // export {};表示这是一个独立的模块，不会影响其他
  // let num: string = "123"; 无法重新声明块方位变量num
  // 基础类型 包装类型  规范 小写的类型一般用于基础类型，大写的类型一般用于实例类型
  //类型可以提进行反举，当值是数字的时候 ,枚举没有值的时候会根据上一个的索引自动累加
  //异构枚举 就是枚举中 不光有字数还有字符串，异构枚举上一个是字符串下一个无法推导
  const r = "ok" /* STATUS["OK"] */;
  console.log(r); //OK
  BigInt(123);

})();
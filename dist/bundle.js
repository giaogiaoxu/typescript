(function () {
  'use strict';

  // 参数this问题  尽量不使用this来作为函数的上下文 this的缺陷就是类型推导问题
  // 如果想限制this类型，需要手动限制this的类型
  function fn(key) {
      return this[key];
  }
  const person = {
      name: "zhangsan",
      age: 18,
      address: "beijing",
  };
  fn.call(person, "age");

})();

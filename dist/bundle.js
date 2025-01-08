(function () {
  'use strict';

  class Animal {
      constructor(name, age) {
          this.name = name;
          this.age = age;
          this.name = name;
          this.age = age;
      }
      get aliasAame() {
          return `#${this.name}`;
      }
      getAge() {
          return this.age;
      }
  }
  class cat extends Animal {
      constructor(name, age) {
          super(name, age);
          console.log(this.age);
      }
  }
  console.log(new cat("cat", 1));

})();

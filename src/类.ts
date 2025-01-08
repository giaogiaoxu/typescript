class Animal {
  constructor(public name: string, protected age: number) {
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
// super构造函数 指向的是父类 在原型的方法中调用的使用指向的是父类的原型
// 子类在重写父类方法的时候要兼容 赋予的函数可以兼容父类
class cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
    console.log(this.age);
  }
}
console.log(new cat("cat", 1));
// 接口 抽象类 有抽象也有实现  接口必须都是抽象的 没有具体的实现
// type 和 interface的区别
// 一般情况下 描述对象使用interface，类使用interface更多一些 inteface无法联合类型 type不能重名
// type 可以快速声明类型 能用type就type 不能用就interface ，复杂类型采用type
interface Iperson {
  name: string;
}
// 赋值的时候会有兼容性
let obj = {
  name: "123",
  age: 123,
  address: "123",
};
let person: Iperson = obj;
// 接口可以描述函数
interface ICounter {
  (): number;
  count: number;
}
// const 标识此值不能被修改 let 可以被修改 （如果给函数增加类型定义 函数不能被修改时只能用const）
const counter: ICounter = () => {
  return 1;
};
counter.count = 1;

console.log(counter.count);
interface IVeg {
  name: string;
  taste: string;
  size: string;
  color: string;
}
// 用？号表示属性可有可无
// 断言的方式来进行赋值
// 索引接口
// redeonly
interface IVegtable {
  [key: string]: any;
}
interface ResponseData {
  name: string;
  token: string;
}
interface ReturnValue {
  code: number;
  data: ResponseData;
}
type ICode = ReturnValue["code"];
type IUsername = ReturnValue["data"]["name"];
// 取值的类型
type IKeys = ReturnValue["code" | "data"];
// 接口可以实现 都是通过类来实现的 接口中一个类可以实现多个接口
interface ISpeakable extends SpeakChinaese, SpeakEnglish {
  // speak:()=>void 实现的实例方法
  speak(): void; //实现的是原型方法
}
interface SpeakEnglish {
  // speak:()=>void 实现的实例方法
  speakEnglish(): void; //实现的是原型方法
}
interface SpeakChinaese {
  // speak:()=>void 实现的实例方法
  speakChinaese(): void; //实现的是原型方法
}

class Speker implements ISpeakable, SpeakChinaese, SpeakEnglish, Speak {
  public a: string;
  constructor() {
    this.a = "1";
  }
  speak() {}
  speakChinaese(): void {}
  speakEnglish(): void {}
}
class Speak {
  public a!: string;
}

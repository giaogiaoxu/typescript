export {};
//  函数中的类型
// 1.函数声明方式
// 2.函数的参数
// 3.函数的返回值
// function add(a, b) {
//     return a + b;
// }
// funciton 声明的函数会有函数提升，可以在函数声明之前调用
// 对于ts来说，有区别 函数关键字声明的函数不能标准函数类型
// 通过表达式声明的函数  赋予的值要满足定义的类型
// const add: (a: any, b: any) => any = (a, b) => {
//   return a + b;
// };
// type ISum = (a: any, b: any) => any;
// type ISum = { (a: any, b: any): any };
// const add: ISum = (a, b) => {
//   return a + b;
// };
// 如果表明了函数的类型，那么以标明的函数类型为准
// 参数 可选参数 ?
type ISum = { (a: any, b?: any): any };
const add: ISum = (a) => {
  return a;
};
const sum = (a: number, b: number = 0): number => {
  return a + b;
};
sum(1);
// 参数this问题  尽量不使用this来作为函数的上下文 this的缺陷就是类型推导问题
// 如果想限制this类型，需要手动限制this的类型
function fn(this: IPerson, key: keyof IPerson) {
  return this[key];
}
type IPerson = typeof person;
const person = {
  name: "zhangsan",
  age: 18,
  address: "beijing",
};
fn.call(person, "age");

// 函数中有arguments
function getSum(...args: any[]) {
  return args.reduce((memo, cur) => memo + cur, 0);
}
// 函数式编程 关注入参和返回值 组合式api 共同点函数 不考虑使用this和arguments
// 参数的类型在参数后面：标识 函数的返回值类型在{}前面：标识
// ts中函数有一个类型 叫重载 对于强类型语言可以一个函数写多变（参数不同） js实现重载靠的是arguments
function toArray(value: number): number[];
function toArray(value: string): string[];
function toArray(value: any): any[] {
  //所有的实现
  return [];
}
let res = toArray(1);
let res2 = toArray("1");

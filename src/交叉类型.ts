export {};
type ReturnType<T> = T extends (...args: any[]) => infer K ? K : any;
interface Func {
  (add: number, sub: number): number;
}
type T1 = ReturnType<Func>;

interface IUser {
  name: string;
  age: 16;
}
interface IUser1 {
  name: string;
  age: 16;
  sex: "男";
}
type T2 = IUser | IUser1;
const obj: T2 & { height: number } = {
  name: "123",
  age: 16,
  height: 123,
};

// 交叉类型 联合类型
interface Person1 {
  handsome: boolean;
  gender: number;
}
interface Person2 {
  height: boolean;
  gender: string;
}
let person: Person1 | Person2 = {
  handsome: true,
  gender: 1,
};
// 并集
// 没有赋值只能使用公有属性
// 赋值需要满足其中一个

// 交叉类型 通用是是两个类型的子类型 最终的结果可以赋予给任何一个类型
// 子类型可以赋予给父类型 子类型必须包含父类型
type Person3 = Person1 & Person2;
type Person4 = Person3["gender"]; //如果两个类型不相同的交集 交集后的结果是never
let person1: Person1 & Person2 = {
  handsome: true,
  height: true,
  gender: 1,
};
// 快速拓展类型
let obj1 = {
  name: "123",
  age: 123,
};
let person3: { name: string; age: number; address: string } =
  obj1 as typeof obj1 & { address: string };
function merge<T extends object, K extends object>(obj1: T, obj2: K) {
  return {
    ...obj1,
    ...obj2,
  };
}

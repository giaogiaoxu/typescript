export {};
let a;
// const 是常量 意味着定义的值不会被修改 所以他的类型是一个字面量类型 cosnt 声明变量必须赋值
// let 声明变量 可以修改  类型范围会被推导变大
const obj = {
  name: "123",
  age: 123,
};
let strOrNumber: string | number;
// strOrNumber.toString();
// 如果是联合类型在使用方法的时候只能采用公共的方法
// 使用联合类型时 要先定义值 再使用 才能使用对应的类型方法

// 1 指定类型再使用
// strOrNumber = 1;
// strOrNumber.toFixed();
// 2 类型断言 断言类型后使用类型方法 as断言成某种类型 (一定是联合类型中的一种) ！非空断言 表示这个值一定不为空
// 将大范围的类型断言成子类型
(strOrNumber! as number).toFixed();
(<number>strOrNumber!).toFixed();
// strOrNumber! as unknown as boolean; 双重断言 破坏原有类型
type Direction = "left" | "right" | "top" | "bottom";
let dir: Direction = "top";

let up = dir as "bottom";

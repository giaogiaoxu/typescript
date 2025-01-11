// 条件类型
// extends 左边和右边的关系
// 子类型 extends 父类型

type Code<T> = T extends 200 | 201 | 204 ? "success" : "fail";
type res = Code<300>;
// 类型级别
// 1 根据结构的角度来分析
type IObj<T> = T extends { name: "jw" } ? "ok" : "fail";
type res1 = IObj<{ name: "jw"; age: 123 }>;
type res2 = IObj<{}>;
// 从类型的角度来进行分析
// never是任何类型的子类型
// 字面量类型
// 基础类型
// 包装类型
// any unkown
// type T1 = never extends number ? true : false;
// type T1 = "str" extends string ? true : false;
type T1 = string extends String ? true : false;
export {};

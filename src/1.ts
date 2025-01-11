// 接口的返回值可能是统一的
// 泛型的默认值来解决泛型的值的默认情况
type IUnion<T = boolean> = T | string | number;
type T1 = IUnion;
type T2 = IUnion<string[] | number[]>;
// 泛型是传递的类型  在使用类型的时候都要加上约束 泛型约束
function getVal<T extends string | number>(value: T): T {
  return value;
}

getVal(123123);
getVal("1");
export {};

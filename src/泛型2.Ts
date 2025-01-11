export {};
// 泛型可以用于函数 接口 类 type
// 在使用的时候 无法确定当时的类型 可以用泛型来定义

const createArr = <T>(length: number, value: T): Array<T> => {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
let arr = createArr(3, "x");
// interface IForEach {
//   表示在使用这个函数的时候传入类型<T>(
//     arr: T[],
//     callback: (item: T, index: number) => void
//   ): void;
// }
// function IForEach<T>(
//   arr: T[],
//   callback: (item: T, index: number) => void
// ): void;

// function IForEach(arr: any, callback: (val: any, index: number) => any) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }
// IForEach([1, 2, 3], (item, index) => {
//   console.log(item);
// });
// interface CallBack {
//   //第一种写法
//   <T>(item: T, index: number): void;
// }
// interface IForEach {
//   <T>(arr: T[], callback: CallBack): void;
// }
// const IForEach: IForEach = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// };
// IForEach([1, 2, 3, {}], (item, index) => {
//   console.log(item); //这里推到出来的item为T
// });
// interface CallBack<T> {  第二种写法
//   (item: T, index: number): void;
// }
// interface IForEach {
//   //表示在使用接口的时候传入类型 第二种写法
//  <T>(arr: T[], callback: CallBack<T>): void;
// }
// const IForEach: IForEach<number> = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// };
// IForEach([1, 2, 3], (item, index) => {
//   console.log(item); //这里item推导出来的类型为number
// });
// 泛型默认值
type Iunion<T = boolean> = T | string | number;
type t1 = Iunion;
// 使用泛型的时候不能直接做运算 无法保证泛型的结果类型
// function getValue<T>(val: T): T {
//   return val + val;
// }
// 可以通过泛型约束
// 约束当前泛型T需要是number | string的子类型
function getValue<T extends number | string>(val: T): T {
  return val;
}
function getLength<T extends { length: number }>(val: T): T {
  return val;
}
getLength("123");
// getLength(12);
function getObjectValue<T extends object, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}
class List<T> {
  private arr: T[] = [];
  add(val: T) {
    this.arr.push(val);
  }
  getMax(): T {
    let max = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
      if (max < this.arr[i]) {
        max = this.arr[i];
      }
    }
    return max;
  }
}

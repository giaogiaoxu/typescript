// 类型的分类：基础类型、高级类型、内置类型、自定义类型
// TS类型都是在变量后来写 ： 后面是类型 = 号后面是值

// 不同文件下的最外层声明的变量都会被TS认为是全局变量，可以使用export {} 让TS认为是模块内的变量
// export {};表示这是一个独立的模块，不会影响其他
// let num: string = "123"; 无法重新声明块方位变量num

// 基础类型 包装类型  规范 小写的类型一般用于基础类型，大写的类型一般用于实例类型
let s1: string = "123";
// let s2: string = new String("123");不能将类型String分配给类型string
let s3: String = "1";
let s4: String = new String("1"); //类的类型，用来描述实例

let arr: number[] = [1, 2, 3];
let arr1: Array<number | string> = [1, 2, 3, "5"]; //数组泛型
let arr2: (string | number)[] = ["1", "2", "3", 5];

// 元组类型 tuple
// 赋予的值必须和类型一一对应
let tuple: [a: string, b: number] = ["1", 2];
//tuple[1] = "2"; 不能将类型string分配给类型number
// tuple.push(true);元祖在新增内容的时候 不能增加额外的类型，只能是元祖中的类型，而且无法访问新增的内容
tuple.push("3");

//console.log(tuple[3]); //长度为2的元祖在索引3处没有元素

// 枚举类型
// 维护一组常量的时候
// 常量枚举不会额外编译成对象，所以更节约
const enum STATUS {
  OK = "ok",
  NO_OK = 100,
  NOT_FOUND,
}
//类型可以提进行反举，当值是数字的时候 ,枚举没有值的时候会根据上一个的索引自动累加
//异构枚举 就是枚举中 不光有字数还有字符串，异构枚举上一个是字符串下一个无法推导
const r = STATUS["OK"];
console.log(r); //OK
// null undefined 基本类型 正常情况下只能赋予 null undefined (null undefined 是所有类型的子类型)
// 如果禁用非严格null检测，null undefined可以赋予任何类型
let n: null = null;
// n = 123;

// void类型代表的是空类型 void一般用于表示函数的返回值
// undefined可以赋予给void 是void的子类型
// never; //代表永远不会返回结果的类型
// 函数无法执行完毕
// function whileTrue(): never {
//   while (true) {}
// }
// function throwError(): never {
//   throw new Error(); 出错函数无法执行完毕
// }

// any; //任意类型 any会导致类型丧失类型检测

// unknown; //未知类型

// object; //对象类型

const symbol1: symbol = Symbol("symbol");
const bigint: bigint = BigInt(123);
// 基础类型
// string number boolean never void null undefined any 数组 元祖 枚举 symbol bigint object
export {};
// type GetRturnType<T> = T extends (...args: any[]) => infer R ? R : never;
// type Func = (a: number) => number;
// type Result = GetRturnType<Func>; //number
// type GetArrayItemType<T extends any[]> = T[1] extends infer R ? R : never;
// let arr3: [string, number] = ["1", 2];
// type ArrayItem = GetArrayItemType<typeof arr3>; //number

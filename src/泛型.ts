// 如何表示传入的是一个类
class Dog {}
class Cat {}
// 类的类型不能描述类本身，描述的是实例
// 类的类型需要通过typeof来取实例
// TS的校验规则 鸭子类型检测
// function createInstance<T>(clazz: typeof Dog) {
//   return new clazz();
// }
interface IClazz<T> {
  new (): T;
}
function createInstance<T>(clazz: IClazz<T>) {
  return new clazz();
}
const instance = createInstance(Dog);
// 泛型 泛型坑位 函数的形参 刚开始类型不确定 通过使用的时候来确定类型
export {};

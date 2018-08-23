/**
 * Паттерн "Одиночка" - порождающий
 * Определяет объект (или класс), который может иметь только один экземпляр (например система ведения журнала сообщений,
 * система уведомлений и т.д.)
 */

// Самый просто пример - объект
let Singleton1 = {
  foo: 123
};

let obj1 = Singleton1;
let obj2 = Singleton1;

obj1.foo = 456;
console.log(obj1.foo); //456
console.log(obj2.foo); //456
console.log(obj1 === obj2); // true

function Singleton2() {
  if (Singleton2.instance) return Singleton2.instance;
  this.foo = 123;
  return Singleton2.instance = this;
}

let obj3 = new Singleton2();
let obj4 = new Singleton2();

obj3.foo = 345;
console.log(obj3.foo);
console.log(obj4.foo);
console.log(obj3 === obj4); // true

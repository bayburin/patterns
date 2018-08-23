/**
 * Паттерн "Декоратор, wrapper, обертка" - порождающий
 * Предназначенный для динамического подключения дополнительного поведения к объекту. Декоратор предоставляет гибкую альтернативу
 * практике создания подклассов с целью расширения функциональности.
 *
 * Решаемая проблема (использование):
 * Вы хотите добавить новые обязанности в поведении или состоянии отдельных объектов во время выполнения программы.
 * Использование наследования не представляется возможным, поскольку это решение статическое и распространяется целиком на весь класс.
 */

function User(name) {
  this.name = name;

  this.say = function() {
    console.log('My name is ' + this.name);
  };
}

function DecorateUser(user, age) {
  this.user = user;
  this.age = age;

  this.say = function() {
    console.log('My name is ' + this.user.name + ' and age is ' + this.age);
  };
}

let
  user = new User('Ravil'),
  decorated = new DecorateUser(user, 26);

user.say();
decorated.say();

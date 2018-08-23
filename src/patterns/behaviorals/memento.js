/**
 * Паттерн "Хранитель" - поведенческий
 * Не нарушая инкапсуляции, паттерн получает и сохраняет внутреннее состояние объекта, чтобы его можно было
 * восстановить в таком же состоянии.
 *
 * Решаемая проблема (использование):
 * Восстановление объекта. Операции "Отмена", "Откат"
 */

function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

User.prototype.freeze = function() {
  let memento = JSON.stringify(this);
  return memento;
};

User.prototype.unfreeze = function(memento) {
  let data = JSON.parse(memento);
  this.name = data.name;
  this.age = data.age;
  this.city = data.city;
};

function DataStore() {
  this.users = {};
}

DataStore.prototype.add = function(key, memento) {
  this.users[key] = memento;
};

DataStore.prototype.get = function(key) {
  return this.users[key]
};

let
  ravil = new User('Ravil', 18, 'Moscow'),
  dataStore = new DataStore();

dataStore.add(1, ravil.freeze());
ravil.name = 'RavilNew';
console.log(ravil.name);

ravil.unfreeze(dataStore.get(1));
console.log(ravil.name);

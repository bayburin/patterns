/**
 * Паттерн "Наблюдатель" - поведенческий
 * Паттерн определяет зависимость "один-ко-многим" между объектами так, что при изменении состояния одного объекта
 * все зависящие от него объекты уведомляются и обновляются автоматически.
 *
 * Решаемая проблема (использование): Имеется система, состоящая из множества взаимодействующих классов.
 * При этом взаимодействующие объекты должны находиться в согласованных состояниях.
 */

function Observer() {
  let subscribers = [];

  this.subscribe = function(fn) {
    subscribers.push(fn);
  };

  this.unsubscribe = function(fn) {
    subscribers = subscribers.filter((subscriber) => subscriber !== fn);
  };

  this.broadcast = function(status) {
    subscribers.forEach((fn) => fn.status = status);
  }
}

function User(name) {
  this.status = 'waiting';
}

let
  ravil = new User('ravil'),
  vadim = new User('vadim');
  observer = new Observer();

observer.subscribe(ravil);
observer.broadcast('done');
console.log('Ravil status: ', ravil.status);
console.log('Vadim status: ', vadim.status);

observer.unsubscribe(ravil);
observer.broadcast('test');
console.log('Ravil status: ', ravil.status);
console.log('Vadim status: ', vadim.status);

observer.subscribe(ravil);
observer.subscribe(vadim);
observer.broadcast('failed');
console.log('Ravil status: ', ravil.status);
console.log('Vadim status: ', vadim.status);

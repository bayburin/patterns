/**
 * Паттерн "Приспособленец" - порождающий
 * Используется для эффективной поддержки большого числа мелких объектов.
 *
 * Решаемая проблема (использование):
 * Проектирование системы из объектов самого низкого уровня обеспечивает оптимальную гибкость, но может быть неприемлемо
 * "дорогим" решением с точки зрения производительности и расхода памяти.
 */

function Flyweight(make, model) {
  this.make = make;
  this.model = model;
}

function FlyweightFactory() {}

FlyweightFactory.store = {};

FlyweightFactory.get = function(make, model) {
  if (!FlyweightFactory.store[make + model]) {
    FlyweightFactory.store[make + model] = new Flyweight(make, model);
  }
  return FlyweightFactory.store[make + model];
}

FlyweightFactory.getCount = function() {
  let count = 0;
  for (let s in FlyweightFactory.store) count ++;
  return count;
}

function Computer(make, model, processor, proc_id) {
  this.flyweigh = FlyweightFactory.get(make, model);
  this.proc_id = proc_id;
  this.getMake = function() {
    return this.flyweigh.make;
  };
}

let
  pc1 = new Computer('HP', 'Model 1', 'Intel', '7ff778'),
  pc2 = new Computer('HP', 'Model 1', 'Intel', 'ad3d23'),
  pc3 = new Computer('HP', 'Model 2', 'AMD', 'ad3d23');

console.log('Flyweight count', FlyweightFactory.getCount());



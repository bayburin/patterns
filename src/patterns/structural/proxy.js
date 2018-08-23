/**
 * Паттерн "Прокси, заместитель, суррогат" - порождающий
 * Данный паттерн оборачивает собой другой объект (не меняя его интерфейс), притворяясь “оригинальный” объектом. Перехватывая все
 * вызовы к нему, реализует дополнительную скрытую логику.
 *
 * Решаемая проблема (использование):
 * Вам нужно управлять ресурсоемкими объектами. Вы не хотите создавать экземпляры таких объектов до момента их реального использования.
 * 1. Паттерн Proxy является суррогатом или замеcтителем другого объекта и контролирует доступ к нему.
 * 2. Предоставляя дополнительный уровень косвенности при доступе к объекту, может применяться для поддержки распределенного,
 *    управляемого или интеллектуального доступа.
 * 3. Являясь "оберткой" реального компонента, защищает его от излишней сложности.
 *
 * В ES6 ПОЯВИЛСЯ ВСТРОЕННЫЙ ОБЪЕКТ PROXY
 */

function Log() {
  this.add = function(f, method) {
    console.log('Class ' + f + ' with method ' + method + ' runned');
  }
}

Factory = function(color) {
  this.createCar = function() {
    console.log('Creating car with ' + color + ' color');
  }
}

function FactoryProxy(factory = new Factory('red')) {
  this.createCar = function() {
    log.add('FactoryProxy', 'createCar');
    factory.createCar();
  }
}

let
  log = new Log(),
  factory = new Factory('blue');
  carFactory = new FactoryProxy(factory);

carFactory.createCar();

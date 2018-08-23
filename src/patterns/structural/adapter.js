/**
 * Паттерн "Адаптер, wrapper, обертка" - порождающий
 * Обеспечивает совместную работу классов с несовместимым интерфейсом путем добавления недостающей логики.
 *
 * Решаемая проблема (использование):
 * Часто в новом программном проекте не удается повторно использовать уже существующий код. Например, имеющиеся классы
 * могут обладать нужной функциональностью, но иметь при этом несовместимые интерфейсы. В таких случаях следует
 * использовать текущий паттерн.
 */

function Car() {
  this.move = function(start, end, speed) {
    console.log('Car: move');
    // ...
    return 1;
  };
}

function CarExtended() {
  this.setStart = function(start) {
    // ...
  };

  this.setEnd = function(end) {
    // ...
  };

  this.setSpeed = function(speed) {
    // ...
  };

  this.runMove = function() {
    console.log('CarExtended: move');
    // ...
    return 1;
  };
}

function CarAdapter() {
  let carExt = new CarExtended();

  this.move = function(start, end, speed) {
    carExt.setStart(start);
    carExt.setEnd(end);
    carExt.setSpeed(speed);
    return carExt.runMove();

    // this.setStart(start);
    // this.setEnd(end);
    // this.setSpeed(speed);
    // return this.runMove();
  }
}

CarAdapter.prototype = new CarExtended();
CarAdapter.prototype.constructor = CarAdapter;

function Foo() {
  let
    start = 0,
    end = 100,
    speed = 60;

  this.bar = function(carInstance) {
    return carInstance.move(start, end, speed);
  }
}

let
  foo = new Foo(),
  car = new CarAdapter();

foo.bar(car);

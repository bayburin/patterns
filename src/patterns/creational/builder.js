/**
 * Паттерн "Строитель" - порождающий
 * Небходим для создания экземпляров классов. К нему обращаются если у создаваемого объекта есть сложные связи с другими
 * объектами, особые условия для валидации, и/или мы должны их абстрагировать с точки зрения интерфейса.
 *
 * Решаемая проблема (использование):
 * В системе могут существовать сложные объекты, создание которых за одну операцию затруднительно или невозможно. Требуется
 * поэтапное построение объектов с контролем результатов выполнения каждого этапа.
 */

function Shop() {
  this.construct = function(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

function CarBuilder() {
  this.step1 = function() {
    this.car = new Car();
  };

  this.step2 = function() {
    this.car.addParts();
  };

  this.get = function() {
    return this.car
  }
}

function Car() {
  this.doors = 0;

  this.addParts = function() {
      this.doors = 4;
  };

  this.run = function() {
      console.log('Car is runned');
  };
}

let
  shop = new Shop(),
  carBuilder = new CarBuilder();
  car = shop.construct(carBuilder);

car.run();
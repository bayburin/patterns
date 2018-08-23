/**
 * Паттерн "Абстрактная фабрика" - порождающий
 * Предоставляет интерфейс для создания связанных или зависимых объектов без указания их конкретных классов.
 *
 * Использовать:
 * 1. Система должна оставаться независимой как от процесса создания новых объектов, так и от типов порождаемых объектов.
 *    Непосредственное использование выражения new в коде приложения нежелательно.
 * 2. Необходимо создавать группы или семейства взаимосвязанных объектов, исключая возможность одновременного использования
 *    объектов из разных семейств в одном контексте.
 */

function EmployeeFactory() {
  this.name = null;
  this.say = function() {};
}

function Manager(name) {
  this.name = name;

  this.say = function() {
    console.log('I am manager ' + this.name);
  };
}

function ManagerFactory() {
  this.create = function(name) {
    return new Manager(name);
  };
}

ManagerFactory.prototype = new EmployeeFactory();
ManagerFactory.prototype.constructor = ManagerFactory;

function Vendor(name) {
  this.name = name;

  this.say = function() {
    console.log('I am vendor ' + this.name);
  };
}

function VendorFactory() {
  this.create = function(name) {
    return new Vendor(name);
  };
}

VendorFactory.prototype = new EmployeeFactory();
VendorFactory.prototype.constructor = VendorFactory;

let
  workers = [],
  managerFactory = new ManagerFactory(),
  vendorFactory = new VendorFactory();

workers.push(managerFactory.create('Ravil'));
workers.push(managerFactory.create('Pasha'));
workers.push(vendorFactory.create('Misha'));
workers.push(vendorFactory.create('Danil'));

workers.forEach(worker => worker.say());

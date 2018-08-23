/**
 * Паттерн "Фабричный метод" - порождающий
 * Используется, когда в системе часто требуется создавать объекты самых разных типов
 *
 * Решаемая проблема (использование):
 * 1. Система должна оставаться расширяемой путем добавления объектов новых типов. Непосредственное использование
 *    ыражения new является нежелательным, так как в этом случае код создания объектов с указанием конкретных типов
 *    может получиться разбросанным по всему приложению. Тогда такие операции как добавление в систему объектов новых
 *    типов или замена объектов одного типа на другой будут затруднительными (подробнее в разделе Порождающие паттерны).
 *    Паттерн Factory Method позволяет системе оставаться независимой как от самого процесса порождения объектов, так и
 *    от их типов.
 * 2. Заранее известно, когда нужно создавать объект, но неизвестен его тип.
 */

/*
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

function Worker() {
  this.createFactory = function(type) {
    if (type === 'manager') {
      return new ManagerFactory();
    } else if (type === 'vendor') {
      return new VendorFactory();
    }
  }
}

let
  worker = new Worker(),
  managerFactory = worker.createFactory('manager'),
  vendorFactory = worker.createFactory('vendor'),
  ravil = managerFactory.create('Ravil'),
  vadim = vendorFactory.create('Vadim');

ravil.say();
vadim.say();
*/



function Factory() {
  this.createEmployee = function (type) {
    let employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {
      console.log(this.type + ": rate " + this.hourly + "/hour");
    }

    return employee;
  }
}

let FullTime = function () {
  this.hourly = "$12";
};

let PartTime = function () {
  this.hourly = "$11";
};

let Temporary = function () {
  this.hourly = "$10";
};

let Contractor = function () {
  this.hourly = "$15";
};

// log helper

let
  employees = [],
  factory = new Factory();

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("contractor"));

for (let i = 0, len = employees.length; i < len; i++) {
  employees[i].say();
}

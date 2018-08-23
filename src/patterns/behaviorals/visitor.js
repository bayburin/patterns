/**
 * Паттерн "Посетитель" - поведенческий
 * Создает операции, которые выполняются над элементами некоторого объекта, при этом не меняя сам объект.
 *
 * Решаемая проблема:
 * Данный паттерн хорош, если вам нужно реализовать простой интерфейс позволяющий проводить множество действий над разными объектами.
 */

function Employee(name, salary) {
  this.accept = function(visitor) {
    visitor.visit(this);
  }

  this.getName = function () {
    return name;
  };

  this.getSalary = function () {
    return salary;
  };

  this.setSalary = function (sal) {
    salary = sal;
  };
}

function ExtraSalary() {
  this.visit = function(employee) {
    employee.setSalary(employee.getSalary() * 1.3);
  }
}

let
  ravil = new Employee('ravil', 130000),
  visitor = new ExtraSalary();

console.log(ravil.getSalary());
ravil.accept(visitor);
console.log(ravil.getSalary());

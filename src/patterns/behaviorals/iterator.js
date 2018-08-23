/**
 * Паттерн "Итератор" - поведенческий
 * Обеспечивает способ доступа к элементам объекта последовательно (или к совокупности объектов).
 *
 * Решаемая проблема:
 * Вам необходим механизм "абстрактного" обхода различных структур данных так, что могут определяться алгоритмы,
 * способные взаимодействовать со структурами прозрачно.
 */

function Iterator(items) {
  let index = 0;

  this.first = () => {
    this.reset();
    return this.next();
  }

  this.next = () => items[index++];

  this.hasNext = () => index <= items.length;

  this.reset = function() {
    index = 0;
  };

  this.each = function(callback) {
    for(let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  };
}

let iter = new Iterator(['a', 123, 'b']);

iter.each(function(item) {
  console.log(item);
})
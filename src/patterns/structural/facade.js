/**
 * Паттерн "Декоратор" - порождающий
 * Предоставляет собой простой интерфейс к сложной системе классов, библиотеке или фреймворку. Использовать его если у вас есть
 * несколько классов и вам нужно написать для них оболочку с ограниченным интерфейсом. Фасад определяет интерфейс более высокого
 * уровня, который упрощает работу подсистемы.
 *
 * Решаемая проблема (использование):
 * Клиенты хотят получить упрощенный интерфейс к общей функциональности сложной подсистемы.
 */

let AutoStore = function(name) {
  this.name = name;

  this.apply = function(carName, value) {
    let
      result = 'approved',
      bank = new Bank(),
      vendor = new CarVendor(),
      ins = new Insurance();

    if (!bank.approve(this.name, value)) {
      result = 'bank denied';
    } else if (!vendor.carExists(carName)) {
      result = 'car does not exists';
    } else if (!ins.casco(this.name, carName)) {
      result = 'casco denied';
    }

    return result;
  };
};

// Банк
function Bank() {
  this.approve = function(name, value) {
    // ...
    return false;
  }
}

// Производитель
function CarVendor() {
  this.carExists = function(car) {
    // ...
    return true;
  }
}

// Страховая
function Insurance() {
  this.casco = function(name, car) {
    // ...
    return true;
  };
}

let store = new AutoStore('ravil');
console.log(store.apply('100000', 'x1'));

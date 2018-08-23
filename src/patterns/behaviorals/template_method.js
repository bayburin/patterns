/**
 * Паттерн "Шаблонный метод" - поведенческий
 * Данный шаблон позволяет переложить реализацию алгоритма манипулирования данными с класса-родителя, на классы потомки,
 * которые созданы для каждого конкретного случая. Не меняя при этом входящие данные и не переписывая публичные методы.
 *
 * Решаемая проблема:
 * Имеются два разных, но в тоже время очень похожих компонента. Вы хотите внести изменения в оба компонента, избежав
 * дублирования кода.
 */

 /**
  * Пример 1
  */
function HouseTemplate() {
  this.buildHouse = function() {
    this.buildWalls();
    this.buildWindows();
  }

  this.buildWalls = function(color) {
    throw new Error('You have to build your own walls');
  }

  this.buildWindows = function() {
    console.log('Building windows');
  }
}



function WoodHouse() {
  this.buildWalls = function(color) {
    console.log('Building wood walls');
  }
}

WoodHouse.prototype = new HouseTemplate();
WoodHouse.prototype.constructor = WoodHouse;

function BrickHouse() {
  this.buildWalls = function(color) {
    console.log('Building brick walls');
  }
}

BrickHouse.prototype = new HouseTemplate();
BrickHouse.prototype.constructor = BrickHouse;

let woodHouse = new WoodHouse();
woodHouse.buildHouse();

/**
 * Пример 2
 */
let dataStore = {
  process: function() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }
}

function template(proto) {
  let f = function() {}
  f.prototype = proto
  return new f();
}

let database = template(dataStore);
database.connect = function() {
  console.log('connect to DB');
};

database.select = function() {
  console.log('select from DB');
};

database.disconnect = function() {
  console.log('disconnect from DB');
};

database.process();

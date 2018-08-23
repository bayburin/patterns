/**
 * Паттерн "Мост" - порождающий
 * Отделяет абстракцию от ее реализации так, чтобы они могли изменяться независимо друг от друга. Для этого реализацию и абстракцию
 * размещают в двух разных иерархиях классов
 */

// Абстракция
function Shape(color) {
  this.setColor = function(newColor) {
    color = newColor;
  };

  this.getColor = function() {
    return color;
  };

  this.applyColor = function() {
    color.applyColor();
  };
};

function Triangle(color) {
  let shape = new Shape(color);

  this.setColor = function(color) {
    shape.setColor(color);
  };

  this.getColor = function() {
    return shape.getColor();
  };

  this.applyColor = function() {
    console.log('Triangle filled with color');
    shape.applyColor();
  };
};

// Реализация
function Color() {
  this.applyColor = function() {
    throw new Error("applyColor method is not implemented");
  };
};

function RedColor() {
  this.applyColor = function() {
    console.log("red color");
  };
};

RedColor.prototype = new Color();
RedColor.prototype.constructor = RedColor;

function GreenColor() {
  this.applyColor = function () {
    console.log("green color");
  };
};

GreenColor.prototype = new Color();
GreenColor.prototype.constructor = GreenColor;

let triangle = new Triangle(new RedColor());
triangle.applyColor();
triangle.setColor(new GreenColor());
triangle.applyColor();

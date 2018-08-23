/**
 * Паттерн "Стратегия" - поведенческий
 * Смысл паттерна - поместить алгоритмы/логику в отдельные объекты. Т.е. определяем семейство алгоритмов (решают общие задачи, имеют
 * одинаковый интерфейс), инкапсулируем их и делаем их взаимозаменяемыми.
 *
 * Решаемая проблема:
 *
 */

function TextMessage(msg) {
  this.encrypt = function(encryptor) {
    return encryptor.encrypt(msg);
  }
}

function FooEncryptor() {
  this.encrypt = function(msg) {
    return msg.replace('m', 'FOO');
  };
}

function BarEncryptor() {
  this.encrypt = function(msg) {
    return msg.replace('m', 'BAR');
  };
}

let
  text = new TextMessage('message'),
  foo = new FooEncryptor(),
  bar = new BarEncryptor();

console.log(text.encrypt(foo));
console.log(text.encrypt(bar));

/**
 * Паттерн "Команда" - поведенческий
 * Превращает операции над объектами в самостоятельные объекты. Т.о. происходит централизованная обработка действий над
 * объектом.
 *
 * Использование:
 *  1. Если необходимо ставить запросы в очередь или поддерживать операции отмены (undo) и повтора (redo) действий
 *  2. Система управляется событиями. При появлении такого события (запроса) необходимо выполнить определенную
 *     последовательность действий.
 */

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }

let Command = function (execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

let AddCommand = function (value) {
  return new Command(add, sub, value);
};

let SubCommand = function (value) {
  return new Command(sub, add, value);
};

let MulCommand = function (value) {
  return new Command(mul, div, value);
};

let DivCommand = function (value) {
  return new Command(div, mul, value);
};

let Calculator = function () {
  let
    current = 0,
    commands = [];

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
    },

    undo: function () {
      let command = commands.pop();
      current = command.undo(current, command.value);
    },

    getCurrentValue: function () {
      return current;
    }
  }
};

let calculator = new Calculator();

calculator.execute(new AddCommand(100));
calculator.execute(new SubCommand(24));
calculator.execute(new MulCommand(6));
calculator.execute(new DivCommand(2));

calculator.undo();
calculator.undo();

/*
class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

class AddCommand {
  constructor(value) {
    return new Command(add, sub, value);
  }
}

class SubCommand {
  constructor(value) {
    return new Command(sub, add, value);
  }
}

class MulCommand {
  constructor(value) {
    return new Command(mul, div, value);
  }
}

class DivCommand {
  constructor(value) {
    return new Command(div, mul, value);
  }
}

class Calculator {
  constructor() {
    this.current = 0;
    this.commands = [];
  }

  execute(command_instance) {
    this.current = command_instance.execute(this.current, command_instance.value);
    this.commands.push(command_instance);
  }

  undo() {
    let command = this.commands.pop();
    this.current = command.undo(this.current, command.value);
  }
}

let calc = new Calculator();
calc.execute(new AddCommand(40));
calc.execute(new MulCommand(2));
calc.undo();
*/

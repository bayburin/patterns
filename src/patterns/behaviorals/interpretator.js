/**
 * Паттерн "Интерпретатор" - поведенческий
 * Используется для создания языковых интерпретаторов. Например, мы можем предложить некий "язык сценариев", который
 * позволит конечному пользователю манипулировать приложением с помощью простых инструкций.
 */

function TerminalExpression(key) {
  this.interpret = (context) => context.includes(key);
};

function OrExpression(expr1, expr2) {
  this.interpret = (context) => {
    return expr1.interpret(context) || expr2.interpret(context)
  };
}

function AndExpression(expr1, expr2) {
  this.interpret = (context) => {
    return expr1.interpret(context) && expr2.interpret(context)
  };
}

function getMaleExpression() {
  let
    ravil = new TerminalExpression("Ravil"),
    danil = new TerminalExpression("Danil");

  return new OrExpression(ravil, danil);
};

function getMarriedExpression() {
  let
    married = new TerminalExpression("married"),
    sveta = new TerminalExpression("Sveta");

  return new AndExpression(married, sveta);
}

let isMale = getMaleExpression();
console.log('Ravil? ' + isMale.interpret('Ravil is learn patterns'));

let isMarried = getMarriedExpression();
console.log('Is Sveta married? ' + isMarried.interpret('Sveta already married'));

/*
class TerminalExpression {
  constructor(key) {
    this.key = key;
  }

  interpret(context) {
    return context.includes(this.key);
  }
}

class OrExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  interpret(context) {
    return this.expr1.interpret(context) || this.expr2.interpret(context);
  }
}

class AndExpression {
  constructor(expr1, expr2) {
    this.expr1 = expr1;
    this.expr2 = expr2;
  }

  interpret(context) {
    return this.expr1.interpret(context) && this.expr2.interpret(context);
  }
}

function getMaleExpression() {
  let
    ravil = new TerminalExpression("Ravil"),
    danil = new TerminalExpression("Danil");

  return new OrExpression(ravil, danil);
};

function getMarriedExpression() {
  let
    married = new TerminalExpression("married"),
    sveta = new TerminalExpression("Sveta");

  return new AndExpression(married, sveta);
}

let isMale = getMaleExpression();
console.log('Ravil? ' + isMale.interpret('Ravil is here'));

let isMarried = getMarriedExpression();
console.log('Married? ' + isMarried.interpret('Sveta already married'));
*/

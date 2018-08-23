/**
 * Паттерн "Цепочка обязанностей" - поведенческий
 * Данный паттерн представляет собой реализацию последовательной цепочки обработчиков для какого либо события/сообщения.
 * Каждый обработчиков решает одну задачу: обработать запрос самостоятельно или передать его дальше по цепочке.
 *
 * Решаемая проблема (использование):
 * Имеется поток запросов и переменное число "обработчиков" этих запросов. Необходимо эффективно обрабатывать запросы
 * без жесткой привязки к их обработчикам, при этом запрос может быть обработан любым обработчиком.
 */

function Logger() {}

Logger.prototype.setNext = function(log_instance) {
  this._next = log_instance;
  return log_instance;
};

Logger.prototype.message = function(msg, lvl) {
  if (lvl <= this.mask) {
    this.sendMessage(msg);
  }
  if (this._next !== null) {
    this._next.message(msg, lvl);
  }
};

Logger.DEBUG_LVL = 7;
Logger.NOTICE_LVL = 5;

function StdOutLogger(mask) {
  this._next = null;
  this.mask = mask;
  this.sendMessage = function(msg) {
    console.log('StdOutLogger: ' + msg);
  }
}

StdOutLogger.prototype = Object.create(Logger.prototype);
StdOutLogger.prototype.constructor = StdOutLogger;

function EmailLogger(mask) {
  this._next = null;
  this.mask = mask;
  this.sendMessage = (msg) => {
    console.log('EmailLogger: ' + msg);
  }
}

EmailLogger.prototype = Object.create(Logger.prototype);
EmailLogger.prototype.constructor = EmailLogger;


let logger = new StdOutLogger(Logger.DEBUG_LVL);
logger.setNext(new EmailLogger(Logger.NOTICE_LVL));

logger.message('this is debug_lvl message', Logger.DEBUG_LVL);
logger.message('this is notice_lvl message', Logger.NOTICE_LVL);


/*
class Logger {
  constructor() {
    this._next = null;
  }

  setNext(log_instance) {
    this._next = log_instance;
    return log_instance;
  }

  message(msg, lvl) {
    if (lvl <= this.mask) {
      this.sendMessage(msg);
    }
    if (this._next !== null) {
      this._next.message(msg, lvl);
    }
  }
}

Logger.DEBUG_LVL = 7;
Logger.NOTICE_LVL = 5;

class StdOutLogger extends Logger {
  constructor(mask) {
    super();
    this.mask = mask;
  }
  sendMessage(msg) {
    console.log('EmailLogger: ' + msg);
  }
}

class EmailLogger extends Logger {
  constructor(mask) {
    super();
    this.mask = mask;
  }
  sendMessage(msg) {
    console.log('EmailLogger: ' + msg);
  }
}

let logger = new StdOutLogger(Logger.DEBUG_LVL);
logger.setNext(new EmailLogger(Logger.NOTICE_LVL));

logger.message('this is debug_lvl message', Logger.DEBUG_LVL);
logger.message('this is notice_lvl message', Logger.NOTICE_LVL);
*/
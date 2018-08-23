/**
 * Паттерн "Медиатор, посредник" - поведенческий
 * Определяет объект (класс), который инкапсулирует взаимодействие других объектов. Т.е. объекты не взаимодействуют
 * друг с другом напрямую, только через медиатор.
 *
 * Решаемая проблема:
 * Мы хотим спроектировать систему с повторно используемыми компонентами, однако существующие связи между этими
 * компонентами можно охарактеризовать феноменом "спагетти-кода".
 */

function User(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype.send = function(msg, to) {
  this.chatroom.send(msg, this, to);
};

User.prototype.receive = function(msg, from) {
  console.log(this.name + '. Message "' + msg + '" from ' + from.name + ' received');
};

function Chatroom() {
  this.users = {};
}

Chatroom.prototype.register = function(user) {
  this.users[user.name] = user;
  user.chatroom = this;
};

Chatroom.prototype.send = function(message, from, to) {
  if (to) {
    to.receive(message, from);
  } else {
    for (key in this.users) {
      if (this.users[key] !== from) {
        this.users[key].receive(message, from);
      }
    }
  }
};

let
  rav = new User('Ravil'),
  danil = new User('Danil'),
  misha = new User('Misha')
  chatroom = new Chatroom();

chatroom.register(rav);
chatroom.register(danil);
chatroom.register(misha);

rav.send('Hello everybody!!!');
danil.send('Hello Ravil', rav);
misha.send('Hi, bro', rav)

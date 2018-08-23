/**
 * Паттерн "Прототип" - порождающий
 * Используется, когда необходимо создать объект на основе уже сущетсвующего объекта (его прототипа).
 */

function Worker(name, status) {
  this.name = name;
  this.status = status;

  this.say = function() {
    console.log('I am a worker. My name is ' + this.name);
  };
}

function WorkerPrototype(proto) {
  this.clone = function() {
    let worker = new Worker();

    worker.name = proto.name;
    worker.status = proto.status;

    return worker;
  }
}

let
  worker = new Worker('n/a', 'pending'),
  workerProto = new WorkerPrototype(worker),
  workerClone = workerProto.clone();

workerClone.say();

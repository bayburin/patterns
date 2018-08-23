/**
 * Паттерн "Состояние" - поведенческий
 * Данный паттерн позволяет менять поведение объекта в зависимости от его состояния.
 *
 * Решаемая проблема:
 * Поведение объекта зависит от его состояния и должно изменяться во время выполнения программы. Такую схему можно реализовать,
 * применив множество условных операторов: на основе анализа текущего состояния объекта предпринимаются определенные действия.
 * Однако при большом числе состояний условные операторы будут разбросаны по всему коду, и такую программу будет трудно поддерживать.
 */

function Document(data) {
  this.data = data;
  this.state = new DraftState(this);

  this.status = function() {
    this.state.status();
  };

  this.publish = function() {
    this.state.publish();
  };

  this.render = function() {
    this.state.render();
  };

  this.changeState = function(stateInstance) {
    this.state = stateInstance;
  };
}

function DraftState(document) {
  this.publish = function() {
    document.changeState(new ModerateState(document))
  };

  this.status = function() {
    console.log('draft state');
  };

  this.render = function() {
    console.log('Nothing to render. On draft state');
  };
}

function ModerateState(document) {
  this.publish = function() {
    document.changeState(new PublishState(document))
  };

  this.status = function() {
    console.log('moderate state');
  };

  this.render = function() {
    console.log('Nothing to render. On moderate state.');
  };
}

function PublishState(document) {
  this.publish = function() {
    return this;
  };

  this.status = function() {
    console.log('publish state');
  };

  this.render = function() {
    console.log('Publishing...');
    console.log(document.data);
  };
}

let data = new Document('content data');
data.status();
data.render();
data.publish();

data.status();
data.render();
data.publish();

data.status();
data.render();

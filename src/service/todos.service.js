import angular from 'angular';

angular.module('carecloud').service('TodosService', TodosService);
function TodosService() {
  this.getAllTodos = function (key) {
    return JSON.parse(localStorage.getItem(key));
  };

  this.deleteTodo = function (key, element) {
    let array = JSON.parse(localStorage.getItem(key));
    array.splice(element, 1);
    localStorage.setItem(key, JSON.stringify(array));
  };

  this.addTodo = function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  };

  this.todoDone = function (key, element, value) {
    let array = JSON.parse(localStorage.getItem(key));
    array[element].done = value;
    localStorage.setItem(key, JSON.stringify(array));
  };

  return this;
}

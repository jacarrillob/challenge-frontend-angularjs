import angular from 'angular';

angular.module('carecloud').service('TodosService', TodosService);

const key = 'myTask';

function TodosService() {
  this.saveTodos = function (todos) {
    localStorage.setItem(key, JSON.stringify(todos));
  };

  this.getAllTodos = function () {
    const todos = localStorage.getItem(key) || '[]';
    return JSON.parse(todos);
  };

  this.deleteTodo = function (element) {
    const todos = this.getAllTodos();
    todos.splice(element, 1);
    this.saveTodos(todos);
  };

  this.addTodo = function (todo) {
    const todos = this.getAllTodos();
    todos.push(todo);
    this.saveTodos(todos);
  };

  this.todoDone = function (element, value) {
    const todos = this.getAllTodos();
    todos[element].done = value;
    this.saveTodos(todos);
  };

  return this;
}

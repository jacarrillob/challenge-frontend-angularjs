import angular from 'angular';
import TodoList from './todos-list.component.html';

angular.module('carecloud').component('todoList', {
  transclude: true,
  bindings: {},
  template: TodoList,
  controller: TodoListController
});

function TodoListController($scope, TodosService) {
  const $ctrl = this;

  $scope.todoList = [];

  $ctrl.$onInit = function () {
    $ctrl.getAllTodos();
  };

  $ctrl.createTask = function () {
    location.href = 'http://localhost:3000/#!/todos/create';
  };

  $ctrl.getAllTodos = function () {
    $scope.todoList = TodosService.getAllTodos();
  };
}

import angular from 'angular';
import TodoListComponent from './todos-list.component.html';

angular.module('carecloud').component('todoListComponent', {
  transclude: true,
  bindings: {},
  template: TodoListComponent,
  controller: TodoListComponentController
});

function TodoListComponentController($scope, TodosService) {
  const $ctrl = this;
  let myTask = 'myTask';

  $scope.todoList = TodosService.getAllTodos(myTask);

  $ctrl.createTask = function () {
    location.href = 'http://localhost:3000/#!/todos/create';
  };
}

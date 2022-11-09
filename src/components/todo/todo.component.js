import angular from 'angular';
import TodoComponent from './todo.component.html';

angular.module('carecloud').component('todoComponent', {
  transclude: true,
  bindings: {
    todo: '<',
    index: '=?'
  },
  template: TodoComponent,
  controller: TodoComponentController
});

function TodoComponentController($scope, $route, TodosService) {
  const $ctrl = this;
  let myTask = 'myTask';

  $ctrl.change = function (element) {
    let value = $ctrl.todo.done;
    TodosService.todoDone(myTask, element, value);
  };

  $ctrl.deleteTodo = function (ele) {
    TodosService.deleteTodo(myTask, ele);
    $route.reload();
  };
}

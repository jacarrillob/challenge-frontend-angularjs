import angular from 'angular';
import TodoListComponent from './todos-list.component.html';

angular.module('carecloud').component('todoListComponent', {
  transclude: true,
  bindings: {},
  template: TodoListComponent,
  controller: TodoListComponentController
});

function TodoListComponentController($scope) {
  const $ctrl = this;
}

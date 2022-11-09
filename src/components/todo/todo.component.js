import angular from 'angular';
import TodoComponent from './todo.component.html';

angular.module('carecloud').component('todoComponent', {
  transclude: true,
  bindings: {},
  template: TodoComponent,
  controller: TodoComponentController
});

function TodoComponentController($scope) {
  const $ctrl = this;
}

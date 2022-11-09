import angular from 'angular';
import TodosCreate from './todos-create.html';

angular.module('carecloud').component('todosCreate', {
  transclude: true,
  bindings: {},
  template: TodosCreate,
  controller: TodosCreateController
});

function TodosCreateController() {}

import angular from 'angular';
import TodosPage from './todos.pages.html';

angular.module('carecloud').component('todosPages', {
  transclude: true,
  bindings: {},
  template: TodosPage,
  controller: TodosPageController
});

function TodosPageController() {}

import angular from 'angular';
import TodoCreateComponent from './todos.form.component.html';

angular.module('carecloud').component('todoCreateComponent', {
  transclude: true,
  bindings: {},
  template: TodoCreateComponent,
  controller: TodoCreateComponentController
});

function TodoCreateComponentController($scope) {
  const $ctrl = this;

  $ctrl.form = {
    name: '',
    age: null
  };

  $ctrl.handleSubmit = function () {
    console.log($ctrl.form);
  };
}

import angular from 'angular';
import TodoCreate from './todos.form.component.html';

angular.module('carecloud').component('todoCreate', {
  transclude: true,
  bindings: {},
  template: TodoCreate,
  controller: TodoCreateController
});

function TodoCreateController(TodosService) {
  const $ctrl = this;

  $ctrl.form = {
    task: null,
    priority: null,
    description: null,
    done: false
  };

  $ctrl.handleSubmit = function () {
    TodosService.addTodo($ctrl.form);

    location.href = 'http://localhost:3000/#!/todos';
  };

  $ctrl.cancel = function () {
    location.href = 'http://localhost:3000/#!/todos';
  };
}

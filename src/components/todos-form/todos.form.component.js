import angular from 'angular';
import TodoCreateComponent from './todos.form.component.html';

angular.module('carecloud').component('todoCreateComponent', {
  transclude: true,
  bindings: {},
  template: TodoCreateComponent,
  controller: TodoCreateComponentController
});

function TodoCreateComponentController($scope, TodosService) {
  const $ctrl = this;

  let myTask = 'myTask';

  $ctrl.form = {
    task: null,
    priority: null,
    description: null,
    done: false
  };

  $ctrl.handleSubmit = function () {
    let task = $ctrl.form.task;
    let priority = $ctrl.form.priority;
    if (!task) return;
    if (!priority) return;

    $scope.todoListFromLocalStorage = TodosService.getAllTodos(myTask);

    if (!$scope.todoListFromLocalStorage) {
      $scope.todoListFromLocalStorage = [];
    } else {
      $scope.todoListFromLocalStorage = TodosService.getAllTodos(myTask);
    }

    $scope.myTask = createPayload();

    $scope.todoListFromLocalStorage.push($scope.myTask);

    TodosService.addTodo(myTask, $scope.todoListFromLocalStorage);

    location.href = 'http://localhost:3000/#!/todos';
  };

  $ctrl.cancel = function () {
    location.href = 'http://localhost:3000/#!/todos';
  };

  function createPayload() {
    const payload = {};

    payload.task = $ctrl.form.task;
    payload.priority = $ctrl.form.priority;
    payload.description = $ctrl.form.description;
    payload.done = $ctrl.form.done;

    return payload;
  }
}

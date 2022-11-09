import angular from 'angular';
import TodoCard from './todo-card.component.html';

angular.module('carecloud').component('todoCard', {
  transclude: true,
  bindings: {
    todo: '<',
    index: '=?',
    onRefresh: '&'
  },
  template: TodoCard,
  controller: TodoCardController
});

function TodoCardController(TodosService) {
  const $ctrl = this;

  $ctrl.change = function (element) {
    let value = $ctrl.todo.done;
    TodosService.todoDone(element, value);
    $ctrl.onRefresh();
  };

  $ctrl.deleteTodo = function (ele) {
    TodosService.deleteTodo(ele);
    $ctrl.onRefresh();
  };
}

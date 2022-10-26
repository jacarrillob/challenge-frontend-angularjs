import angular from 'angular';
import NotFoundPages from './not-found.pages.html';

angular.module('carecloud').component('notFoundPages', {
  transclude: true,
  bindings: {},
  template: NotFoundPages,
  controller: NotFoundController
});

function NotFoundController() {}

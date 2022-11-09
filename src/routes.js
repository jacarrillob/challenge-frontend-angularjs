import angular from 'angular';

angular.module('carecloud').config(['$routeProvider', '$locationProvider', routerResolver]);

function routerResolver($routeProvider) {
  $routeProvider
    .when('/', { redirectTo: '/todos' })
    .when('/todos', { template: '<todos-pages/>' })
    .when('/todos/create', { template: '<todos-create/>' })
    .otherwise({ template: '<not-found-pages/>' });
}

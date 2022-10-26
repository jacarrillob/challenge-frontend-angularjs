import angular from 'angular';

angular.module('carecloud').config(['$routeProvider', '$locationProvider', routerResolver]);

function routerResolver($routeProvider) {
  $routeProvider
    .when('/', { redirectTo: '/todos' })
    .when('/todos', { template: '<todos-pages/>' })
    .otherwise({ template: '<not-found-pages/>' });
}

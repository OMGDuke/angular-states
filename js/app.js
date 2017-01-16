var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/partial-home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/partial-about.html'
    })
});

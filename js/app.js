var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/partial-home.html'
    })
    .state('home.list', {
      url: '/list',
      templateUrl: 'views/partial-home-list.html',
      controller: function($scope) {
        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      }
    })
    .state('home.paragraph', {
      url: '/paragraph',
      template: 'I could sure use a drink right now.'
    })
    .state('about', {
      url: '/about',
      views: {
        '': { templateUrl: 'views/partial-about.html' },
        'columnOne@about': { template: 'I am in column one' },
        'columnTwo@about': {
          templateUrl: 'views/table-data.html',
          controller: 'aboutController'
        },
      }
    })
});

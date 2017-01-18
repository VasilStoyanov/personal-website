(function() {
  'use strict';

  configureApplication.$inject = [
    '$routeProvider', '$locationProvider', '$mdThemingProvider',
    'LoopBackResourceProvider'
  ];

  function configureApplication(
    $routeProvider, $locationProvider, $mdThemingProvider,
    LoopBackResourceProvider
  ) {
    var CONTROLLER_AS_VIEW_MODEL = 'vm';
    var BASE_URL = 'http://localhost:3000';

    // Configure routes
    $routeProvider
      .when('/', {
        templateUrl: 'files/home/home-template.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Enable HTML5 mode
    $locationProvider.html5Mode(true);

    // Configure theming
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange');

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase(BASE_URL);
  };

  angular.module('PersonalWebsite')
    .config(configureApplication);
})();

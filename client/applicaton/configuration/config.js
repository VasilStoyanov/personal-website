(function() {
  'use strict';

  configureApplication.$inject = [
    '$routeProvider', '$locationProvider', '$mdThemingProvider',
    'LoopBackResourceProvider', "CONSTANTS"
  ];

  function configureApplication(
    $routeProvider, $locationProvider, $mdThemingProvider,
    LoopBackResourceProvider, CONSTANTS
  ) {
    // Configure routes
    $routeProvider
      .when('/', {
        templateUrl: CONSTANTS.HOME_TEMPLATE_PATH,
        controller: CONSTANTS.HOME_CONTROLLER,
        controllerAs: CONSTANTS.HOME_CONTROLLER_AS_VIEW_MODEL
      })
      .when('/signin', {
        templateUrl: CONSTANTS.SIGN_IN_TEMPLATE_PATH,
        controller: CONSTANTS.SIGN_IN_CONTROLLER,
        controllerAs: CONSTANTS.SIGN_IN_CONTROLLER_AS_VIEW_MODEL
      })
      .otherwise({
        redirectTo: '/'
      });

    // Enable HTML5 mode
    $locationProvider.html5Mode(true);

    // Configure theming
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('orange');

    // Use a custom auth header instead of the default 'Authorization'
    LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase(CONSTANTS.BASE_URL);
  };

  angular.module('PersonalWebsite')
    .config(configureApplication);
})();

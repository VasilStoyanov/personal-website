(function() {
  'use strict';

  // Dependancy injection
  BaseHandler.$inject = [
    '$scope', '$mdSidenav', '$mdDialog'
  ];

  function BaseHandler($scope, $mdSidenav, $mdDialog) {
    this._$scope = $scope;
    this._$mdSidenav = $mdSidenav;
    this._$mdDialog = $mdDialog;

    this.onLoad();
  };

  // Do something when controller initially loads
  BaseHandler.prototype.onLoad = function() {};

  // When we are on a mobile screen, toggle sidenav on or off
  BaseHandler.prototype.toggleLeftSideNav = function() {
    this._$mdSidenav('left').toggle();
  };

  BaseHandler.prototype.hasUserLoggedIn = function() {
    return false;
  };

  BaseHandler.prototype.userSignInDialog = function() {
    var PATH_TO_SIGN_IN_TEMPLATE =
      '/files/sign-in/signInDialog-template.html';
    var CONTROLLER_AS_VIEW_MODEL = 'vm';

    var parentEl = angular.element(document.body);

    this._$mdDialog.show({
      parent: parentEl,
      templateUrl: PATH_TO_SIGN_IN_TEMPLATE,
      controller: 'SignInDialogController',
      controllerAs: CONTROLLER_AS_VIEW_MODEL
    });

  };

  angular.module('PersonalWebsite.Controllers')
    .controller('BaseController', BaseHandler);
})();

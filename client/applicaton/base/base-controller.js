(function() {
  'use strict';

  // Dependancy injection
  BaseController.$inject = [
    '$scope', '$mdSidenav', '$mdDialog',
    "$location"
  ];

  function BaseController($scope, $mdSidenav, $mdDialog, $location) {
    this._$scope = $scope;
    this._$mdSidenav = $mdSidenav;
    this._$mdDialog = $mdDialog;
    this._$location = $location;

    this.onLoad();
  };

  // Do something when controller initially loads
  BaseController.prototype.onLoad = function() {
    this.navButtons = [{
      name: 'home-nav-btn',
      text: 'Home',
      iconName: 'home',
      navigationPath: '/'
    }, {
      name: 'biography-nav-btn',
      text: 'My biography',
      iconName: 'tag_faces',
      navigationPath: '/biography'
    }, {
      name: 'programming-nav-btn',
      text: 'Programming',
      iconName: 'code',
      navigationPath: '/programming'
    }, {
      name: 'contacts-nav-btn',
      text: 'Contacts',
      iconName: 'contacts',
      navigationPath: '/contacts'
    }, {
      name: 'signIn-nav-btn',
      text: 'Sign In',
      iconName: 'supervisor_account',
      navigationPath: '/signin'
    }];

    this.selectedButton = this.selectedButton || 'home-nav-btn';
  };

  // When we are on a mobile screen, toggle sidenav on or off
  BaseController.prototype.toggleLeftSideNav = function() {
    this._$mdSidenav('left').toggle();
  };

  BaseController.prototype.hasUserLoggedIn = function() {
    return false;
  };

  BaseController.prototype.navigateTo = function(path, selectedButton) {
    this._$location.path(path);
    this.selectedButton = selectedButton;
  };

  BaseController.prototype.userSignInDialog = function() {
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
    .controller('BaseController', BaseController);
})();

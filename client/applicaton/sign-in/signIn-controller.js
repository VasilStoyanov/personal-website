(function() {
  'use strict';

  SignInController.$inject = ["$scope"];

  function SignInController($scope) {
    this._$scope = $scope;

    this.onLoad();
  }

  SignInController.prototype.onLoad = function() {
    this._$scope.$parent.base.selectedButton = "signIn-nav-btn";
  };

  angular.module('PersonalWebsite.Controllers')
    .controller('SignInController', SignInController);
})();

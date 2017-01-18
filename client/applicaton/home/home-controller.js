(function() {
  'use strict';

  // Dependancy injection
  homeHandler.$inject = [
    '$scope',
  ];

  function homeHandler($scope) {
    this._$scope = $scope;

    this.onLoad();
  };

  // Do something when controller initially loads
  homeHandler.prototype.onLoad = function() {

  };

  angular.module('PersonalWebsite.Controllers')
    .controller('HomeController', homeHandler);
})();

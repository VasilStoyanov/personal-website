(function() {
  'use strict';

  // Dependancy injection
  SignInHandler.$inject = [
    '$scope', '$mdToast', '$log',
    'User'
  ];

  function SignInHandler(
    $scope, $mdToast, $log,
    User
  ) {
    this._$scope = $scope;
    this._$mdToast = $mdToast;
    this._$log = $log;

    // Loopback user service
    this._User = User;

    this.userCredentials = {};
  };

  SignInHandler.prototype.createNewUser = function() {
    if (!this._validUserCredentials(this.userCredentials)) {
      return;
    };

    this._User.create(this.userCredentials);
  };

  SignInHandler.prototype._validUserCredentials = function(userCredentials) {
    if (!userCredentials || typeof userCredentials !== 'object') {
      this._showToast('Invalid data.');
      this._$log.error('Expected user credentials as object, received:');
      this._$log.error(userCredentials);
      return false;
    } else if (!userCredentials.name) {
      this._showToast('Please enter a valid username!');
      return false;
    } else if (!userCredentials.password) {
      this._showToast('Please enter a valid password!');
      return false;
    } else if (!userCredentials.repPassword) {
      this._showToast('Please retype the password!');
      return false;
    } else if (userCredentials.password !== userCredentials.repPassword) {
      this._showToast('The two passwords don\'t match!');
      return false;
    }

    return true;
  };

  SignInHandler.prototype._showToast = function(message) {
    this._$mdToast.show(
      this._$mdToast.simple()
      .textContent(message)
      .position('top right')
      .hideDelay(3000)
    );
  };

  angular.module('PersonalWebsite.Controllers')
    .controller('SignInDialogController', SignInHandler);
})();

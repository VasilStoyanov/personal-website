(function() {
  'use strict';

  angular.module('PersonalWebsite.Services', []);
  angular.module('PersonalWebsite.Controllers', ['PersonalWebsite.Services']);

  angular.module('PersonalWebsite', [
    'PersonalWebsite.Services',
    'PersonalWebsite.Controllers',
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'lbServices'
  ]);

})();
